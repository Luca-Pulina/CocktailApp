import { createSlice } from "@reduxjs/toolkit"

const cocktailSlice = createSlice({
	name: "cocktails",
	initialState: {
		items: [],
	},
	reducers: {
		storeCocktail(state, action) {
			const newCocktail = action.payload
			console.log("asd", action.payload)
			const existingCocktail = state.items.find(
				(cocktail) => cocktail.idDrink === newCocktail.idDrink
			)

			if (!existingCocktail) {
				state.items.push(newCocktail)
				/*  state.items = [...state.items, newCocktail] */
			}
		},
	},
})

export const cocktailActions = cocktailSlice.actions

export default cocktailSlice
