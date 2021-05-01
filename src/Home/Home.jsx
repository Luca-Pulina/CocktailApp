import { useSelector, useDispatch } from "react-redux"
import { languageActions } from "../store/languageSlice"
// Material
import { Container } from "@material-ui/core"
import Button from "@material-ui/core/Button"

// Router
import { Link } from "react-router-dom"

// Translations
import { useTranslation } from "react-i18next"
import i18n from "i18next"

const Home = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { settedLang } = useSelector((state) => state.language)

	const changeLang = () => {
		if (settedLang === "it") {
			dispatch(languageActions.setLanguage("en"))
			i18n.changeLanguage("en")
		} else {
			dispatch(languageActions.setLanguage("it"))
			i18n.changeLanguage("it")
		}
	}

	return (
		<>
			<Container maxWidth="md">
				<Link to={{ pathname: `/search` }}>
					<Button size="large" style={{ margin: "1rem", fontSize: "2rem" }}>
						{t("start")}
					</Button>
				</Link>
				<Button onClick={changeLang}>{t("toggle_language")}</Button>
			</Container>
		</>
	)
}

export default Home
