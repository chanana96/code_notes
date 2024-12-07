import { AppRouter } from 'app/router';
import { AppProvider } from 'app/provider';
function App() {
	return (
		<AppProvider>
			<AppRouter />
		</AppProvider>
	);
}

export default App;
