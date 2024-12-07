import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const editorStyle = {
	width: '50vw',
	height: '50vh',
};
interface EditorProps {
	value: string;
	onChange: (value: string) => void;
}
export const Editor = ({ value, onChange }: EditorProps) => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	useEffect(() => {
		if (monacoEl.current) {
			const newEditor = monaco.editor.create(monacoEl.current, {
				value: value || '',
				language: 'typescript',
				theme: 'vs-dark',
			});
			setEditor(newEditor);

			const model = newEditor.getModel();
			const disposable = model?.onDidChangeContent(() => {
				onChange(model.getValue());
			});

			return () => {
				newEditor.dispose();
				disposable?.dispose();
			};
		}
	}, [monacoEl.current]);

	return <div style={editorStyle} ref={monacoEl}></div>;
};
