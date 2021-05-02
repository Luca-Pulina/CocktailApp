// Style
import styles from "./CocktailDetail.module.css"
// Material
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import SaveIcon from "@material-ui/icons/Save"

// Router
import { Link } from "react-router-dom"
const MiniNav = ({ saveCocktail }) => {
	return (
		<Grid container spacing={1} className={styles.miniNav}>
			<Grid item xs={6}>
				<span className={styles.searchButton}>
					<Link to={{ pathname: `/search` }}>
						<IconButton aria-label="search" color="primary" fontSize="large">
							<SearchIcon />
						</IconButton>
					</Link>
				</span>
			</Grid>
			<Grid item xs={6}>
				<span className={styles.searchButton}>
					<IconButton
						aria-label="SaveIcon"
						color="primary"
						fontSize="large"
						onClick={saveCocktail}
					>
						<SaveIcon />
					</IconButton>
				</span>
			</Grid>
		</Grid>
	)
}

export default MiniNav
