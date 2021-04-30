import { NavLink } from "react-router-dom"
// Material
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"

const Header = () => {
	return (
		<AppBar position="static" color="primary">
			<Container maxWidth="xs">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						<NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
							Cocktail Demo
						</NavLink>
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header
