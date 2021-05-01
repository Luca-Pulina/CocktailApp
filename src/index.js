import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./AppRouter"
import reportWebVitals from "./reportWebVitals"

// Redux
import store from "./store/store"
import { Provider } from "react-redux"

// React-Query
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AppRouter />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
