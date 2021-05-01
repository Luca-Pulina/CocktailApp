import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const getAllCocktails = async () => {
	try {
		const { data } = await axios.get(`/search.php?s=`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getCocktailByName = async (name) => {
	try {
		const { data } = await axios.get(`/search.php?s=${name}`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const getCocktailById = async (id) => {
	try {
		const { data } = await axios.get(`/lookup.php?i=${id}`)
		return data
	} catch (error) {
		console.log(error)
	}
}
