
import { DiffEditor } from '@monaco-editor/react';

export default function DiffCodeEditor(props: any) {
  const { original, modified } = props;

  return (
    <DiffEditor
      height="100%"
      language="typescript"
      original={original}
      modified={modified}
      originalModelPath="omp.ts"
      modifiedModelPath="mmp.ts"
      theme="vs-dark"
      options={{
        scrollBeyondLastLine: false,
        readOnly: true,
        minimap: { enabled: false },
        renderOverviewRuler: false,
      }}
    />
  );
}
