
import ReactMarkdown from 'react-markdown'

export default function Markdown(props: any) {
  const md: string = props.md
    .replaceAll("<<", "**`")
    .replaceAll(">>", "`**");
  return (
    <ReactMarkdown>
      {md}
    </ReactMarkdown>
  );
}