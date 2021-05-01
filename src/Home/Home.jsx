// Material
import { Container } from "@material-ui/core"
import Button from "@material-ui/core/Button"

// Router
import { Link } from "react-router-dom"

// Translations
import { useTranslation } from "react-i18next"

const Home = () => {
	const { t } = useTranslation()

	return (
		<>
			<Container maxWidth="md">
				<Link to={{ pathname: `/search` }}>
					<Button size="large" style={{ margin: "1rem", fontSize: "2rem" }}>
						{t("start")}
					</Button>
				</Link>
			</Container>
		</>
	)
}

export default Home
