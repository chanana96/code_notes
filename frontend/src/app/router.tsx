import { paths } from 'config/paths';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { QueryClient } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useMemo, Suspense } from 'react';

const createAppRouter = (queryClient: QueryClient) =>
	createBrowserRouter([
		{
			path: paths.main.path,
			lazy: async () => {
				const { Index } = await import('routes/Index');

				return { Component: Index };
			},
		},
	]);

export const AppRouter = () => {
	const queryClient = useQueryClient();
	const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
	return <RouterProvider router={router} />;
};
