import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { queryConfig } from 'lib/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@components/errors/ErrorFallback';

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: queryConfig,
			}),
	);
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
