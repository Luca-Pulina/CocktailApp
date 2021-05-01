import { useEffect, useState, useCallback } from "react"
import CardCocktail from "../CardCocktail/CardCocktail"

// Material
import { Container } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
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
				{cocktails === null && !loading && (
					<Container maxWidth="md">
						<h2>{t("no_drinks")}</h2>
					</Container>
				)}
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
								<CardCocktail cocktail={cocktail} />
							</Grid>
						)
					})}
			</Grid>
		</>
	)
}

export default SearchArea
