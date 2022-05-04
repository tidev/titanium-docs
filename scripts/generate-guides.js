const fm = require('front-matter');
const fs = require('fs-extra');
const path = require('path');

const docsDir = path.resolve(__dirname, '..', 'docs');
const src = path.join(docsDir, 'guide');
const dest = path.join(docsDir, '.vuepress', 'guide.json');

function walkSection(dir, stripTitlePrefix, parent) {
	const items = [];

	for (const filename of fs.readdirSync(dir)) {
		const file = path.join(dir, filename);
		const isDir = fs.statSync(file).isDirectory();
		const rel = `/${path.relative(docsDir, file)}/`;
		const name = filename.replace(/\.md$/, '');
		let title = name;
		let weight = 10;

		const mdFile = isDir ? path.join(file, 'README.md') : file;
		if (!/\.md$/.test(mdFile) || filename === 'README.md') {
			// skip non-markdown files and skip readme since the parent dir already processed it
			continue;
		}

		try {
			const { attributes } = fm(fs.readFileSync(mdFile, 'utf8'));
			if (attributes.title) {
				title = attributes.title;
			}
			if (attributes.sidebar_title) {
				title = attributes.sidebar_title;
			}
			if (attributes.weight) {
				weight = parseInt(attributes.weight);
			}
		} catch (e) {}

		if (stripTitlePrefix &&  title.startsWith(stripTitlePrefix)) {
			title = title.substring(stripTitlePrefix.length);
		}

		items.push({
			name,
			title,
			weight,
			file,
			path: rel,
			isDir
		});
	}

	return items.sort((a, b) => a.weight - b.weight).map(item => {
		if (item.isDir) {
			const children = walkSection(item.file, stripTitlePrefix, `${parent ? `${parent}/` : ''}${item.name}`);
			if (children.length) {
				return {
					title: item.title,
					path: item.path,
					children
				};
			}
		}
		return [ `${parent ? `${parent}/` : ''}${item.name}${item.isDir ? '/' : ''}`, item.title ];
	});
}

const titleMap = {
	'Alloy_Framework': 'Alloy ',
	'Titanium_SDK' : 'Titanium SDK '
}

function walk(dir) {
	const result = {};
	for (const name of fs.readdirSync(dir)) {
		const file = path.join(dir, name);
		if (fs.statSync(file).isDirectory()) {
			result[`/${path.relative(docsDir, file)}/`] = walkSection(file, titleMap[name]);
		}
	}
	return result;
}

const guide = walk(src);
fs.writeFileSync(dest, JSON.stringify(guide, null, 4), 'utf8');
console.log(`Wrote ${dest}`);
