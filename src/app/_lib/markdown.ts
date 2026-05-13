import fs from 'fs';
import path from 'path';
import {remark} from 'remark';
import html from 'remark-html';

export async function renderMarkdown(relativePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), 'src/content', relativePath);
  const source = fs.readFileSync(fullPath, 'utf8');
  const processed = await remark().use(html).process(source);
  return processed.toString();
}
