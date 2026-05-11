import MarkdownPage from "@/app/_components/templates/MarkdownPage";
import {renderMarkdown} from "@/app/_lib/markdown";
import "@/app/globals.css";

export default async function CocEn() {
  const html = await renderMarkdown('coc/en.md');
  return <MarkdownPage html={html}/>;
}
