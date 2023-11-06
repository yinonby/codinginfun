
import ReactMarkdown from 'react-markdown'

export default function Markdown(props: any) {
    return (
        <ReactMarkdown>
            {props.children}
        </ReactMarkdown>
    );
}