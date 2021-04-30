import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../src/Layout/Header"
import SearchArea from "../src/Search/SearchArea/SearchArea"
import Home from "../src/Home/Home"

import CssBaseline from "@material-ui/core/CssBaseline"
import CocktailDetail from "./CocktailDetail/CockailDetail"
const AppRouter = () => (
	<BrowserRouter>
		<CssBaseline />
		<Header />

		<Switch>
			<Route path="/" component={Home} exact={true} />
			<Route path="/search" component={SearchArea} />
			<Route path="/cocktail/:id" component={CocktailDetail} />
			{/* <Route component={NotFoundPage} /> */}
		</Switch>
	</BrowserRouter>
)

export default AppRouter
