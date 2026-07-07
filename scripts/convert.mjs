import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import * as yaml from 'js-yaml';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: false, breaks: true });

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const DOCS_DIR = join(ROOT, 'docs');
const API_OUT = join(DOCS_DIR, 'api');
const MODULES_CACHE = join(ROOT, 'modules-cache');
const TI_SDK_CACHE = join(ROOT, 'titanium-sdk-cache');
const ALLOY_CACHE = join(ROOT, 'alloy-cache');

const MODULES = [
 { name: 'Map', repo: 'tidev/ti.map', apidoc: 'apidoc' },
 { name: 'Facebook', repo: 'tidev/ti.facebook', apidoc: 'apidoc' },
 { name: 'CoreMotion', repo: 'tidev/ti.coremotion', apidoc: 'apidoc' },
 { name: 'Crypto', repo: 'tidev/ti.crypto', apidoc: 'apidoc' },
 { name: 'URLSession', repo: 'tidev/ti.urlsession', apidoc: 'apidoc' },
 { name: 'Identity', repo: 'tidev/titanium-identity', apidoc: 'apidoc' },
 { name: 'PlayServices', repo: 'tidev/ti.playservices', apidoc: 'apidoc' },
 { name: 'Geofence', repo: 'tidev/ti.geofence', apidoc: 'apidoc' },
 { name: 'BLE', repo: 'tidev/appcelerator.ble', apidoc: 'apidoc' },
 { name: 'Bluetooth', repo: 'tidev/appcelerator.bluetooth', apidoc: 'apidoc' },
 { name: 'HTTPS', repo: 'tidev/appcelerator.https', apidoc: 'apidoc' },
 { name: 'EncryptedDatabase', repo: 'tidev/appcelerator.encrypteddatabase', apidoc: 'apidoc' },
 { name: 'WebDialog', repo: 'tidev/titanium-web-dialog', apidoc: 'apidoc' },
 { name: 'Barcode', repo: 'tidev/ti.barcode', apidoc: 'apidoc' },
 { name: 'AppleSignIn', repo: 'tidev/titanium-apple-sign-in', apidoc: 'apidoc' },
  { name: 'NFC', repo: 'tidev/ti.nfc', apidoc: 'apidoc' },
];

const ALLOY = { name: 'Alloy', repo: 'tidev/alloy', apidoc: 'docs' };

const copied = new Set();

const SPECIAL_SLUGS = {
  iOS: 'ios',
  iPad: 'ipad',
  iPhone: 'iphone',
  macOS: 'macos',
};

function slugify(name) {
  if (SPECIAL_SLUGS[name]) return SPECIAL_SLUGS[name];
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function namespaceFromPath(ymlPath, baseDir, prefix = 'Titanium') {
  const rel = ymlPath.replace(baseDir, '').replace(/^\//, '');
  const dir = dirname(rel);
  const parts = dir.split('/').filter(p => p && p !== '.');
  return [prefix, ...parts].join('.');
}

function docToPath(name, ymlPath) {
  const parts = name.split('.');
  const ymlBasename = basename(ymlPath, extname(ymlPath));
  const parentDir = basename(dirname(ymlPath));
  const last = parts[parts.length - 1];

  if (ymlBasename === parentDir) {
    const nsDir = parts.slice(0, -1).map(d => d.toLowerCase());
    const dirName = last.toLowerCase();
    return { dir: [...nsDir, dirName].join('/'), file: 'index.md' };
  }

  const dirs = parts.slice(0, -1).map(d => d.toLowerCase());
  return { dir: dirs.join('/'), file: slugify(last) + '.md' };
}

function linkify(text) {
  if (!text) return text;
  return text.replace(/<([A-Za-z][\w.]*)>/g, (match, ref) => {
    const parts = ref.split('.');
    const typeParts = [];
    for (const p of parts) {
      if (p[0] === p[0].toUpperCase() && p[0] !== p[0].toLowerCase()) {
        typeParts.push(p);
      } else {
        break;
      }
    }
    const typeName = typeParts.join('.');
    if (!typeName || typeName.split('.').length < 2) return '<' + ref + '>';
    const rest = parts.slice(typeParts.length).join('.');
    const slugParts = typeParts.map(p => slugify(p));
    const dirPath = typeParts.slice(0, -1).map(p => p.toLowerCase()).join('/');
    const outPath = '/api/' + (dirPath ? dirPath + '/' : '') + slugParts[slugParts.length - 1];
    const text = rest ? typeName + '.' + rest : typeName;
    return `[${text}](${outPath})`;
  });
}

function copyImages(md, ymlDir) {
  return md.replace(/\]\(([^)]+)\)/g, (match, imgPath) => {
    imgPath = imgPath.trim();
    if (imgPath.startsWith('http') || imgPath.startsWith('/') || imgPath.startsWith('#') || imgPath.startsWith('api/')) {
      return match;
    }
    const fullPath = join(ymlDir, imgPath);
    if (!existsSync(fullPath)) return match;
    const name = basename(imgPath).replace(/[^a-zA-Z0-9._-]/g, '_');
    const dest = join(DOCS_DIR, 'public', 'images', name);
    if (!copied.has(name)) {
      mkdirSync(dirname(dest), { recursive: true });
      copyFileSync(fullPath, dest);
      copied.add(name);
    }
    return `](/images/${name})`;
  });
}

function parseExample(text) {
  if (!text.includes('```')) return { code: [{ content: text, language: '' }] };

  const blocks = [];
  let cursor = text;
  let consumed = 0;

  while (cursor.includes('```')) {
    const start = cursor.indexOf('```');
    const afterOpen = cursor.slice(start + 3);
    const langEnd = afterOpen.indexOf('\n');
    if (langEnd === -1) break;
    const lang = afterOpen.slice(0, langEnd).trim();
    const innerStart = langEnd + 1;
    const close = afterOpen.indexOf('```');
    if (close === -1 || close <= innerStart) break;
    const codeContent = afterOpen.slice(innerStart, close).replace(/\n$/, '');
    const blockLen = 3 + langEnd + 1 + close + 3;
    blocks.push({ lang, code: codeContent, startOffset: consumed + start, endOffset: consumed + start + blockLen });
    consumed += start + blockLen;
    cursor = afterOpen.slice(close + 3);
  }

  if (blocks.length === 0) return { code: [{ content: text, language: '' }] };

  const intro = text.slice(0, blocks[0].startOffset).trim();
  const code = blocks.map(b => ({ content: b.code, language: b.lang }));
  return { code, intro: intro || undefined };
}

function fmtType(t) {
  if (!t) return '';
  if (Array.isArray(t)) return t.map(fmtType).join(', ');
  return t;
}

function fmtSince(s) {
  if (!s) return '';
  if (typeof s === 'string') return s;
  return Object.values(s).join(', ');
}

function fmtPlatforms(p) {
  if (!p) return '';
  return Array.isArray(p) ? p.join(', ') : p;
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').trim();
}

function jscaToDoc(jscaType) {
  let name = jscaType.name;
  if (!name.includes('.') && name !== 'Alloy') {
    name = 'Alloy.' + name;
  }
  const doc = { name };

  function splitSummary(desc) {
    const m = desc.match(/\.\s/);
    const dot = m ? m.index : -1;
    if (dot > 0) {
      const head = desc.substring(0, dot + 1);
      const tail = desc.substring(dot + 2).trim();
      if (tail) return { summary: head, description: desc };
    }
    return { summary: desc };
  }

  const { summary, description } = splitSummary(stripHtml(jscaType.description || ''));
  doc.summary = summary;
  if (description) doc.description = description;

  doc.properties = (jscaType.properties || [])
    .filter(p => p.name)
    .map(p => ({
      name: p.name,
      type: p.type || '',
      summary: stripHtml(p.description || '')
    }));
  if (doc.properties.length === 0) delete doc.properties;

  doc.methods = (jscaType.functions || [])
    .filter(f => f.name && f.isMethod !== false)
    .map(f => {
      const m = { name: f.name };
      const fDesc = stripHtml(f.description || '');
      const { summary: fSum, description: fDescLong } = splitSummary(fDesc);
      m.summary = fSum;
      if (fDescLong) m.description = fDescLong;

      const params = (f.parameters || []).map(p => {
        const pe = { name: p.name, type: p.type || '' };
        if (p.description) pe.summary = stripHtml(p.description);
        if (p.usage === 'optional') pe.optional = true;
        return pe;
      });
      if (params.length) m.parameters = params;

      if (f.returns) {
        m.returns = { type: f.returns.type || '' };
        if (f.returns.description) {
          const rDesc = stripHtml(f.returns.description);
          if (rDesc) m.returns.summary = rDesc;
        }
      }
      return m;
    });
  if (doc.methods.length === 0) delete doc.methods;

  doc.events = (jscaType.events || [])
    .filter(e => e.name)
    .map(e => {
      const entry = { name: e.name };
      const { summary: eSum, description: eDesc } = splitSummary(stripHtml(e.description || ''));
      entry.summary = eSum;
      if (eDesc) entry.description = eDesc;
      return entry;
    });
  if (doc.events.length === 0) delete doc.events;

  return doc;
}

function fixYamlContent(content) {
  const lines = content.split('\n');
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const opens = (line.match(/\[/g) || []).length;
    const closes = (line.match(/\]/g) || []).length;
    if (opens > closes && i + 1 < lines.length) {
      const next = lines[i + 1];
      const leading = line.match(/^(\s*)/)[1].length;
      const nextLeading = next.match(/^(\s*)/)[1].length;
      if (nextLeading <= leading) {
        result.push(line.replace(/\[.*$/, m => m + ' ' + next.trim()));
        i++;
        continue;
      }
    }
    result.push(line);
  }
  return result.join('\n');
}

function docToMd(doc, ymlPath, nsOpts = {}) {
  let { name, summary, description, extends: ext, since, platforms, deprecated } = doc;
  if (!name.includes('.')) {
    const ns = namespaceFromPath(ymlPath, nsOpts.baseDir, nsOpts.prefix || 'Titanium');
    if (name !== ns) {
      name = ns + '.' + name;
    }
  }
  const pathInfo = docToPath(name, ymlPath);
  const ymlDir = dirname(ymlPath);
  const outDir = join(API_OUT, pathInfo.dir);
  const outFile = join(outDir, pathInfo.file);

  function renderText(text) {
    if (!text) return '';
    return md.renderInline(linkify(text));
  }

  function wrapCodeBlocks(html) {
    return html.replace(
      /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
      (_, lang, code) => `<div class="language-${lang}"><pre class="shiki"><code>${code}</code></pre></div>`
    );
  }

  function renderBlock(text) {
    if (!text) return '';
    return wrapCodeBlocks(md.render(copyImages(linkify(text), ymlDir)));
  }

  const fmData = { title: name };

  fmData.properties = (doc.properties || []).map(p => {
    const entry = { name: p.name, type: fmtType(p.type) };
    if (p.summary) entry.summary = renderText(p.summary);
    if (p.description) entry.description = renderBlock(p.description);
    if (p.deprecated) entry.deprecated = true;
    if (p.platforms) {
      entry.platforms = Array.isArray(p.platforms) ? p.platforms : [p.platforms];
    }
    if (p.since) entry.since = p.since;
    if (p.extended) entry.extended = true;
    return entry;
  });

  fmData.methods = (doc.methods || []).map(m => {
    const entry = { name: m.name };
    if (m.summary) entry.summary = renderText(m.summary);
    if (m.description) entry.description = renderBlock(m.description);
    const params = (m.parameters || []).map(p => {
      const pe = { name: p.name, type: fmtType(p.type) };
      if (p.summary) pe.summary = renderText(p.summary);
      if (p.optional) pe.optional = true;
      return pe;
    });
    if (params.length) entry.parameters = params;
    if (m.returns) {
      const rt = Array.isArray(m.returns)
        ? m.returns.map(r => fmtType(r.type)).join(', ')
        : fmtType(m.returns.type);
      entry.returns = { type: rt };
      if (m.returns.summary) entry.returns.summary = m.returns.summary;
    }
    if (m.extended) entry.extended = true;
    return entry;
  });

  fmData.events = (doc.events || []).map(e => {
    const entry = { name: e.name };
    if (e.summary) entry.summary = renderText(e.summary);
    if (e.description) entry.description = renderBlock(e.description);
    const eProps = (e.properties || []).map(p => {
      const pe = { name: p.name, type: fmtType(p.type) };
      if (p.summary) pe.summary = renderText(p.summary);
      return pe;
    });
    if (eProps.length) entry.properties = eProps;
    if (e.extended) entry.extended = true;
    return entry;
  });

  fmData.examples = (doc.examples || []).map(ex => {
    const entry = {};
    if (ex.title) entry.title = ex.title;
    if (ex.example) {
      const parsed = parseExample(ex.example);
      entry.code = parsed.code;
      if (parsed.intro) entry.intro = parsed.intro;
    }
    return entry;
  });

  // Remove empty collections
  if (!fmData.properties.length) delete fmData.properties;
  if (!fmData.methods.length) delete fmData.methods;
  if (!fmData.events.length) delete fmData.events;
  if (!fmData.examples.length) delete fmData.examples;

  function escapeBodyHtml(text) {
    const VUE_TAGS = ['ApiProperties', 'ApiMethods', 'ApiEvents', 'ApiExamples'];
    const saved = [];

    text = text.replace(
      new RegExp('</?(?:' + VUE_TAGS.join('|') + ')\\s*/?>', 'g'),
      match => { saved.push(match); return '\x00' + (saved.length - 1) + '\x00'; }
    );

    text = text.replace(/```[\s\S]*?```/g, match => {
      saved.push(match);
      return '\x00' + (saved.length - 1) + '\x00';
    });

    text = text.replace(/`[^`]+`/g, match => {
      saved.push(match);
      return '\x00' + (saved.length - 1) + '\x00';
    });

    text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    text = text.replace(/\x00(\d+)\x00/g, (_, i) => saved[parseInt(i)]);
    return text;
  }

  let body = `# ${name}\n\n`;
  if (deprecated) {
    body += `> **Deprecated** since ${deprecated.since}${deprecated.notes ? ': ' + deprecated.notes : ''}\n\n`;
  }
  if (summary) body += linkify(summary) + '\n\n';
  if (description) {
    body += copyImages(linkify(description), ymlDir) + '\n\n';
  }
  const meta = [];
  if (ext) meta.push(`**Extends:** \`${ext}\``);
  if (since) meta.push(`**Since:** ${fmtSince(since)}`);
  if (platforms) meta.push(`**Platforms:** ${fmtPlatforms(platforms)}`);
  if (meta.length > 0) body += meta.join(' · ') + '\n\n';

  body = escapeBodyHtml(body);

  if (fmData.properties) body += '<ApiProperties />\n\n';
  if (fmData.methods) body += '<ApiMethods />\n\n';
  if (fmData.events) body += '<ApiEvents />\n\n';
  if (fmData.examples) body += '<ApiExamples />\n\n';

  const frontmatter = `---\n${yaml.dump(fmData)}---\n\n`;
  const content = frontmatter + body;

  const pathSuffix = '/' + (pathInfo.dir ? pathInfo.dir + '/' : '') + pathInfo.file.replace(/\.md$/, '');
  return { outDir, outFile, content, name, shortName: doc.name, path: pathSuffix };
}

function walkYml(dir, list = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walkYml(p, list);
    else if (e.name.endsWith('.yml')) list.push(p);
  }
  return list;
}

/**
 * Recursively merge inherited properties/methods/events from parent types.
 * Modifies doc in-place, marking inherited items with `extended: true`.
 */
function resolveInheritance(doc, typeMap, visited = new Set()) {
  const ext = doc.extends;
  if (!ext) return;
  if (visited.has(ext)) return;
  visited.add(ext);

  const parent = typeMap.get(ext);
  if (!parent) return;

  // Depth-first: resolve grandparent first
  resolveInheritance(parent.doc, typeMap, visited);

  const excludes = doc.excludes || {};

  function mergeItems(childItems, parentItems, excludeList) {
    const childNames = new Set((childItems || []).map(i => i.name));
    const excludeNames = new Set(excludeList || []);
    const inherited = (parentItems || [])
      .filter(i => !childNames.has(i.name) && !excludeNames.has(i.name))
      .map(i => ({ ...i, extended: true }));
    return inherited.length ? [...(childItems || []), ...inherited] : childItems;
  }

  doc.properties = mergeItems(doc.properties, parent.doc.properties, excludes.properties);
  doc.methods = mergeItems(doc.methods, parent.doc.methods, excludes.methods);
  doc.events = mergeItems(doc.events, parent.doc.events, excludes.events);
}

function sidebarTree(items) {
  const tree = {};
  for (const it of items) {
    const parts = it.path.replace('/api/', '').split('/').filter(Boolean);
    let node = tree;
    for (let i = 0; i < parts.length; i++) {
      const key = parts[i];
      if (i === parts.length - 1) {
        node[key] = { text: it.text, link: it.path };
      } else {
        if (!node[key] || node[key].link) {
          node[key] = node[key] && node[key].link ? { _link: { text: node[key].text, link: node[key].link } } : {};
        }
        node = node[key];
      }
    }
  }

  function toSidebar(obj) {
    const folders = [];
    const links = [];
    for (const [key, val] of Object.entries(obj)) {
      if (key.startsWith('_')) continue;
      if (val._link) {
        const children = toSidebar(val);
        children.unshift({ text: val._link.text, link: val._link.link });
        children.sort((a, b) => a.text.localeCompare(b.text));
        const label = key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const displayLabel = label.replace(/\b(Ios|Ipad)\b/gi, match => match === 'Ios' ? 'iOS' : match === 'Ipad' ? 'iPad' : match);
        folders.push({ text: displayLabel, collapsed: true, items: children });
      } else if (val.link) {
        links.push(val);
      } else {
        const children = toSidebar(val);
        const label = key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const displayLabel = label.replace(/\b(Ios|Ipad)\b/gi, match => match === 'Ios' ? 'iOS' : match === 'Ipad' ? 'iPad' : match);
        folders.push({ text: displayLabel, collapsed: true, items: children });
      }
    }
    return [...folders, ...links].sort((a, b) => a.text.localeCompare(b.text));
  }
  return toSidebar(tree);
}

function run() {
  if (!existsSync(TI_SDK_CACHE)) {
    console.log(`\n📦 Cloning tidev/titanium-sdk...`);
    execSync(`git clone --depth 1 --single-branch https://github.com/tidev/titanium-sdk.git "${TI_SDK_CACHE}"`, { stdio: 'inherit' });
  }
  const APIDOC_DIR = join(TI_SDK_CACHE, 'apidoc', 'Titanium');
  const files = walkYml(APIDOC_DIR);
  const items = [];

  // Phase 1: Build type map from all YAML docs
  const typeMap = new Map();
  for (const ymlPath of files) {
    const content = readFileSync(ymlPath, 'utf-8');
    const docs = yaml.loadAll(fixYamlContent(content));
    for (const doc of docs) {
      if (!doc || !doc.name) continue;
      typeMap.set(doc.name, { doc, ymlPath });
    }
  }

  // Phase 2: Resolve inheritance for all types
  for (const [, entry] of typeMap) {
    resolveInheritance(entry.doc, typeMap);
  }

  // Phase 3: Convert to markdown
  for (const [, entry] of typeMap) {
    const result = docToMd(entry.doc, entry.ymlPath, { baseDir: APIDOC_DIR });
    mkdirSync(result.outDir, { recursive: true });
    writeFileSync(result.outFile, result.content, 'utf-8');
    const fullPath = '/api' + result.path;
    const displayName = result.shortName.includes('.') ? result.shortName.split('.').pop() : result.shortName;
    items.push({ text: displayName, path: fullPath });
    console.log(`  ✓ ${entry.doc.name} → ${result.path}`);
  }

  const modEntries = [];
  for (const mod of MODULES) {
    const cacheDir = join(MODULES_CACHE, mod.name.toLowerCase());
    if (!existsSync(cacheDir)) {
      const url = `https://github.com/${mod.repo}.git`;
      console.log(`\n📦 Cloning ${mod.repo}...`);
      execSync(`git clone --depth 1 --single-branch ${url} "${cacheDir}"`, { stdio: 'inherit' });
    }
    const apidocDir = join(cacheDir, mod.apidoc);
    if (!existsSync(apidocDir)) {
      console.log(`  ⚠ No apidoc directory found at ${apidocDir}, skipping`);
      continue;
    }
    const prefix = 'Modules.' + mod.name;
    const modFiles = walkYml(apidocDir);

    // Build module type map
    const modMap = new Map();
    for (const ymlPath of modFiles) {
      const content = readFileSync(ymlPath, 'utf-8');
      const docs = yaml.loadAll(fixYamlContent(content));
      for (const doc of docs) {
        if (!doc || !doc.name) continue;
        // Canonicalize name (e.g., "MyType" → "Modules.BLE.MyType")
        let name = doc.name;
        if (!name.includes('.')) {
          name = namespaceFromPath(ymlPath, apidocDir, prefix) + '.' + name;
        }
        const clean = { doc, ymlPath };
        typeMap.set(name, clean);   // global map for cross-source extends
        modMap.set(name, clean);    // this module's types
      }
    }

    // Resolve inheritance (can look up Titanium types in global map too)
    for (const [, entry] of modMap) {
      resolveInheritance(entry.doc, typeMap);
    }

    // Convert to markdown
    for (const ymlPath of modFiles) {
      const content = readFileSync(ymlPath, 'utf-8');
      const docs = yaml.loadAll(fixYamlContent(content));
      for (const doc of docs) {
        if (!doc || !doc.name) continue;
        const result = docToMd(doc, ymlPath, { baseDir: apidocDir, prefix });
        mkdirSync(result.outDir, { recursive: true });
        writeFileSync(result.outFile, result.content, 'utf-8');
        const fullPath = '/api' + result.path;
        const displayName = result.shortName.includes('.') ? result.shortName.split('.').pop() : result.shortName;
        items.push({ text: displayName, path: fullPath });
        console.log(`  ✓ ${doc.name} → ${result.path}`);
      }
    }
    modEntries.push({ text: mod.name, link: '/api/modules/' + mod.name.toLowerCase() });
  }

  if (modEntries.length > 0) {
    const modIndexDir = join(API_OUT, 'modules');
    mkdirSync(modIndexDir, { recursive: true });
    const links = modEntries.map(e => `- [${e.text}](${e.link}/)`).join('\n');
    const modIndex = `---\ntitle: Modules\n---\n\n# Modules\n\n${links}\n`;
    writeFileSync(join(modIndexDir, 'index.md'), modIndex, 'utf-8');
    console.log(`\n📄 Generated modules index page`);
  }

  // --- Alloy Framework ---
  const alloyDir = join(ALLOY_CACHE, ALLOY.name.toLowerCase());
  if (!existsSync(alloyDir)) {
    console.log(`\n📦 Cloning ${ALLOY.repo}...`);
    execSync(`git clone --depth 1 --single-branch https://github.com/${ALLOY.repo}.git "${alloyDir}"`, { stdio: 'inherit' });
  }
  const jscaPath = join(alloyDir, ALLOY.apidoc, 'api.jsca');
  if (existsSync(jscaPath)) {
    console.log(`\n📄 Processing Alloy API docs...`);
    const jscaContent = readFileSync(jscaPath, 'utf-8');
    const jsca = JSON.parse(jscaContent);
    for (const jscaType of jsca.types || []) {
      if (jscaType.isInternal) continue;
      const doc = jscaToDoc(jscaType);
      const result = docToMd(doc, jscaPath, { baseDir: join(alloyDir, ALLOY.apidoc), prefix: 'Alloy' });
      if (doc.name === 'Alloy') {
        result.outDir = join(API_OUT, 'alloy');
        result.outFile = join(result.outDir, 'index.md');
        result.path = '/alloy/index';
      }
      mkdirSync(result.outDir, { recursive: true });
      writeFileSync(result.outFile, result.content, 'utf-8');
      const fullPath = '/api' + result.path;
      const displayName = result.shortName.includes('.') ? result.shortName.split('.').pop() : result.shortName;
      items.push({ text: displayName, path: fullPath });
      console.log(`  ✓ ${doc.name} → ${result.path}`);
    }
    console.log(`\n📄 Generated Alloy API docs`);
  }

  const sidebar = sidebarTree(items);
  // Ensure Titanium is first, auto-expand with link to index
  const tiIdx = sidebar.findIndex(s => s.text === 'Titanium');
  if (tiIdx > 0) {
    const [ti] = sidebar.splice(tiIdx, 1);
    sidebar.unshift(ti);
  }
  if (sidebar.length > 0 && sidebar[0].text === 'Titanium') {
    sidebar[0].collapsed = true;
    sidebar[0].link = '/api/titanium/';
  }

  const modIdx = sidebar.findIndex(s => s.text === 'Modules');
  if (modIdx !== -1) {
    sidebar[modIdx].collapsed = true;
    sidebar[modIdx].link = '/api/modules/';
  }

  const alloySidIdx = sidebar.findIndex(s => s.text === 'Alloy');
  if (alloySidIdx !== -1) {
    sidebar[alloySidIdx].collapsed = true;
    sidebar[alloySidIdx].link = '/api/alloy/';
  }

  const sidContent = `// Auto-generated by convert.mjs — do not edit manually
export default ${JSON.stringify(sidebar, null, 2)};
`;
  const sidPath = join(DOCS_DIR, '.vitepress', 'sidebar.mjs');
  writeFileSync(sidPath, sidContent, 'utf-8');

  const counts = {};
  for (const it of items) {
    const ns = it.text.split('.')[0];
    counts[ns] = (counts[ns] || 0) + 1;
  }

  console.log(`\n✅ Generated ${items.length} documentation pages`);
  for (const [ns, c] of Object.entries(counts)) {
    console.log(`   ${ns}: ${c} pages`);
  }
  console.log(`✅ Sidebar config written`);
}

run();
