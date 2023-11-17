
import ReactMarkdown from 'react-markdown'

function fixBlockQuotes(md: string): string {
  return md
    .replaceAll(/^>\s\s\s\s\s\s\s\s\s/gm, ">        ")
    .replaceAll(/^>\s\s\s\s\s\s\s/gm, ">      ")
    .replaceAll(/^>\s\s\s\s\s/gm, ">    ")
    .replaceAll(/^>\s\s\s/gm, ">  ")
    .replaceAll(/^>$/gm, "> ");
}

export default function Markdown(props: any) {
  const md: string = fixBlockQuotes(props.md)
    .replaceAll("<<", "**`")
    .replaceAll(">>", "`**");
    console.log(props.md)
    console.log(md)
  return (
    <ReactMarkdown>
      {md}
    </ReactMarkdown>
  );
}