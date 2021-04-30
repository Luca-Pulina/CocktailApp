import { useEffect, useState } from "react"
import { getCocktailById } from "../Services/getCocktails"

// Material
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

// Style
import styles from "./CocktailDetail.module.css"

const CocktailDetail = (props) => {
	const [cocktail, setCocktail] = useState({})
	const { id } = props.match.params

	useEffect(() => {
		const fetchData = async () => {
			const result = await getCocktailById(id)
			setCocktail(result.drinks[0])
		}
		fetchData()
	}, [id])

	return (
		<div className={styles.detailBody}>
			{cocktail && (
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
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
											<li>
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
