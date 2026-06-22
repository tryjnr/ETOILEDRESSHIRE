const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '../outputs/etoile-dress-hire');
const outputDir = path.resolve(__dirname, '../outputs/github-ready');
const outputFile = path.join(outputDir, 'index.html');

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
let js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

for (const filename of fs.readdirSync(path.join(root, 'assets'))) {
  const extension = path.extname(filename).toLowerCase();
  const mime = mimeTypes[extension];
  if (!mime) continue;
  const encoded = fs.readFileSync(path.join(root, 'assets', filename)).toString('base64');
  const dataUri = `data:${mime};base64,${encoded}`;
  const assetPath = `assets/${filename}`;
  html = html.split(assetPath).join(dataUri);
  css = css.split(assetPath).join(dataUri);
  js = js.split(assetPath).join(dataUri);
  js = js.split(`'${filename}'`).join(`'${dataUri}'`);
}

js = js.split('src="assets/${x}"').join('src="${x}"');

html = html.replace(
  '  <link rel="stylesheet" href="styles.css">',
  `  <style>\n${css}\n  </style>`
);
html = html.replace(
  '  <script defer src="app.js"></script>',
  ''
);
html = html.replace(
  '</body>',
  `  <script>\n${js}\n  </script>\n</body>`
);
html = html.replace(
  '<!doctype html>',
  '<!doctype html>\n<!-- Self-contained GitHub Pages build: upload this file as index.html -->'
);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, html);
console.log(outputFile);
