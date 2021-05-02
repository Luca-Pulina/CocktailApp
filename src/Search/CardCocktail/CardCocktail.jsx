import { useSelector } from "react-redux"
// Material
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

// Style
import styles from "./CardCocktail.module.css"

// Router
import { Link } from "react-router-dom"

// Translations
import { useTranslation } from "react-i18next"

const CardCocktail = ({ cocktail }) => {
	const { settedLang } = useSelector((state) => state.language)
	const { t } = useTranslation()

	return (
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
						{settedLang === "en"
							? cocktail.strInstructions
							: cocktail.strInstructionsIT}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					<Link to={{ pathname: `/cocktail/${cocktail.idDrink}` }}>
						{t("learn_more")}
					</Link>
				</Button>
			</CardActions>
		</Card>
	)
}

export default CardCocktail
