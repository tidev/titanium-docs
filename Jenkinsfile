#!groovy
library 'pipeline-library'

// Keep logs/reports/etc of last 30 builds, only keep build artifacts of last 3 builds
properties([buildDiscarder(logRotator(numToKeepStr: '30', artifactNumToKeepStr: '3'))])

def nodeVersion = '10.19.0'

node('linux || osx') {
	timestamps {
		stage('Checkout') {
			checkout scm
		}
		stage('Build') {
			ansiColor('xterm') {
				nodejs(nodeJSInstallationName: "node ${nodeVersion}") {
					ensureNPM()
					timeout(120) {
						sh 'npm ci'
						sh 'npm run docs:build'
					}
				}
			}
		}
		stage('Deploy') {
			// TODO: Can we take docs/.vuepress/dist and publish that to gh-pages branch?
			archiveArtifacts 'docs/.vuepress/dist/'
		}
	}
}


				