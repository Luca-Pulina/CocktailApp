import { getCocktailById } from "../Services/getCocktails"
import { useDispatch } from "react-redux"
import { cocktailActions } from "../store/cocktailSlice"

// Material
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import SaveIcon from "@material-ui/icons/Save"
import CircularProgress from "@material-ui/core/CircularProgress"

// Style
import styles from "./CocktailDetail.module.css"

// Router
import { Link } from "react-router-dom"

// React-Query
import { useQuery } from "react-query"

const CocktailDetail = (props) => {
	const { id } = props.match.params
	const dispatch = useDispatch()
	let cocktail = null

	const { isLoading, isError, data } = useQuery("cocktails", () =>
		getCocktailById(id)
	)

	const handleSaveCocktail = () => {
		cocktail && dispatch(cocktailActions.storeCocktail(cocktail))
	}

	if (isLoading)
		return (
			<div className={styles.loading}>
				<CircularProgress size={150} />
			</div>
		)
	if (isError) return <h1>Error !</h1>
	if (data) cocktail = data.drinks[0]

	return (
		<div className={styles.detailBody}>
			{cocktail && (
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
						<span className={styles.searchButton}>
							<Link to={{ pathname: `/search` }}>
								<IconButton
									aria-label="search"
									color="primary"
									fontSize="large"
								>
									<SearchIcon />
								</IconButton>
							</Link>
						</span>
						<span className={styles.searchButton}>
							<IconButton
								aria-label="SaveIcon"
								color="primary"
								fontSize="large"
								onClick={handleSaveCocktail}
							>
								<SaveIcon />
							</IconButton>
						</span>

						<Paper variant="outlined" className={styles.imgContainer}>
							<img
								src={cocktail.strDrinkThumb}
								alt={cocktail.strDrink}
								width="30%"
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
						<Paper variant="outlined">
							<ul>
								{Object.keys(cocktail).map((keyName, keyIndex) => {
									if (cocktail[keyName] !== null)
										return (
											<li key={keyName}>
												<p>
													<b>{keyName}</b> : {cocktail[keyName]}
												</p>
											</li>
										)
								})}
							</ul>
						</Paper>
					</Grid>
				</Grid>
			)}
		</div>
	)
}

export default CocktailDetail
