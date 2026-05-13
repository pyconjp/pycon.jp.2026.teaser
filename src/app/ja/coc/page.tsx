import MarkdownPage from "@/app/_components/templates/MarkdownPage";
import {renderMarkdown} from "@/app/_lib/markdown";
import "@/app/globals.css";

export default async function CocJa() {
  const html = await renderMarkdown('coc/ja.md');
  return <MarkdownPage html={html}/>;
}
