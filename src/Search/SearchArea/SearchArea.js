import { useEffect, useState, useCallback } from "react"

// Material
import { Container, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CircularProgress from "@material-ui/core/CircularProgress"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

// Custom Style
import styles from "./SearchArea.module.css"
import { getAllCocktails, getCocktailByName } from "../../Services/getCocktails"

// Translations
import { useTranslation } from "react-i18next"
import "../../Translations/i18n"

//lodash
import _ from "lodash"

// Router
import { Link } from "react-router-dom"

const SearchArea = () => {
	const { t } = useTranslation()

	const [cocktails, setCocktails] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const result = await getAllCocktails()
			setCocktails(result.drinks)
			setLoading(false)
		}
		fetchData()
	}, [])

	const handleSearchChange = (e) => {
		debounceGetCocktailByName(e.target.value)
	}

	const debounceGetCocktailByName = useCallback(
		_.debounce(async (query) => {
			setLoading(true)
			const result = await getCocktailByName(query)
			setCocktails(result.drinks)
			setLoading(false)
		}, 1000),
		[]
	)

	return (
		<>
			<Container maxWidth="md">
				<Paper className={styles.searchBox}>
					<TextField
						className={styles.textArea}
						placeholder={t("search_placeholder")}
						onChange={handleSearchChange}
					/>
				</Paper>
			</Container>

			{loading && (
				<div className={styles.loading}>
					<CircularProgress size={150} />
				</div>
			)}

			<Grid container spacing={3}>
				{cocktails === null && !loading && <h2>{t("No drinks")}</h2>}
				{cocktails &&
					!loading &&
					cocktails.map((cocktail) => {
						return (
							<Grid
								item
								className={styles.gridIitem}
								key={cocktail.idDrink}
								xs={12}
								sm={12}
								md={4}
								lg={4}
								xl={3}
							>
								<Card className={styles.card}>
									<CardActionArea>
										<CardMedia
											className={styles.media}
											image={cocktail.strDrinkThumb}
											title={cocktail.strDrink}
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{cocktail.strDrink}
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
												noWrap={true}
											>
												{cocktail.strInstructions}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											<Link
												to={{
													pathname: `/cocktail/${cocktail.idDrink}`,
												}}
											>
												{t("learn_more")}
											</Link>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						)
					})}
			</Grid>
		</>
	)
}

export default SearchArea
