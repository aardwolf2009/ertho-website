import { cp, mkdir, writeFile, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist/src', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('assets', 'dist/assets', { recursive: true, filter: source => !source.endsWith('.md') && !source.endsWith('favicon.svg') });
await cp('src/app.js', 'dist/src/app.js');
await writeFile('dist/.nojekyll', '');
console.log('Static site built in dist/');
