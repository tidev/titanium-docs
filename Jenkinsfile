#!groovy
library 'pipeline-library'

// Keep logs/reports/etc of last 30 builds, only keep build artifacts of last 3 builds
properties([buildDiscarder(logRotator(numToKeepStr: '30', artifactNumToKeepStr: '3'))])

def nodeVersion = '10.19.0'
def isMainBranch = env.BRANCH_NAME.equals('master') || env.BRANCH_NAME.equals('main')

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
			if (isMainBranch) {
				// Push to gh-pages branch to deploy to https://appcelerator.github.io/titanium-docs
				withCredentials([usernamePassword(credentialsId: 'f63e8a0a-536e-4695-aaf1-7a0098147b59', passwordVariable: 'GIT_CREDS_PSW', usernameVariable: 'GIT_CREDS_USR')]) {
					writeFile file: 'credentials-helper.sh', text: "#!/bin/bash\necho username=$GIT_CREDS_USR\necho password=$GIT_CREDS_PSW"
					sh "git config --global credential.helper '/bin/bash ${pwd()}/credentials-helper.sh'"
					sh 'npm run deploy'
					sh 'rm -f credentials-helper.sh'
				}
			} else {
				// PRs and non-main branches, just archive the generated site
				archiveArtifacts 'docs/.vuepress/dist/'
			}
		}
	}
}


				