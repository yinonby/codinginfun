
import ReactMarkdown from 'react-markdown';

function addBlockQuotes(md: string): string {
  const lines: string[] = md.split("\n");
  let newMd: string = "";
  let isBlockQuote: boolean = false;
  for (const line of lines) {
    if (line === ">>>>") {
      isBlockQuote = true;
    } else if (line === "<<<<") {
      isBlockQuote = false;
      newMd += "\n";
    } else {
      if (isBlockQuote) {
        newMd += "> ";
      }
      newMd += line + "\n";
    }
  }
  return newMd;
}

function fixBlockQuotes(md: string): string {
  return md
    .replaceAll(/^>\s\s\s\s\s\s\s\s\s/gm, ">         ")
    .replaceAll(/^>\s\s\s\s\s\s\s/gm, ">       ")
    .replaceAll(/^>\s\s\s\s\s/gm, ">     ")
    .replaceAll(/^>\s\s\s/gm, ">   ")
    .replaceAll(/^>$/gm, "> ")
    .replaceAll(/^>\s/gm, "> ");
}

export default function Markdown(props: any) {
  const md: string = fixBlockQuotes(addBlockQuotes(props.md))
    .replaceAll("<<", "**`")
    .replaceAll(">>", "`**");

  return (
    <ReactMarkdown>
      {md}
    </ReactMarkdown>
  );
}