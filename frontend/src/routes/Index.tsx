import { useState, useRef, createRef } from 'react';
import { Editor } from 'components/Editor';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import 'lib/userWorker';
import { postSnippet } from 'config/axios';
const defaultValue = ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n');

export const Index = () => {
	const { handleSubmit, control, reset } = useForm<any>({});
	const onSubmit: SubmitHandler<any> = async (data) => await postSnippet(data.editor);

	return (
		<Box
			sx={{
				mx: 'auto',
				boxShadow: 3,
				padding: 2,
				display: 'inline-flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='editor'
					control={control}
					defaultValue={defaultValue}
					render={({ field: { onChange, value } }) => (
						<Editor value={value} onChange={onChange} />
					)}
				/>
				<Button variant='outlined' type='submit' style={{ marginTop: '1rem' }}>
					Submit
				</Button>
			</form>
		</Box>
	);
};
