
import Editor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

export default function CodeEditor(props: any) {
  const { value, path, onChange, readOnly } = props;

  function handleChange(value: string | undefined,
    event: editor.IModelContentChangedEvent) {
    onChange(value);
  }

  function handleEditorWillMount(monaco: Monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.
      setCompilerOptions({ module: 1, strict: true });
  }

  return (
    <Editor height="100%"
      defaultLanguage="typescript"
      defaultValue={value}
      path={path}
      onChange={handleChange}
      theme="vs-dark"
      beforeMount={handleEditorWillMount}
      options={{
        scrollBeyondLastLine: false,
        readOnly: readOnly,
        minimap: { enabled: false },
      }}
    />
  );
}
