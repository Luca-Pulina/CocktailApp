import { configureStore } from "@reduxjs/toolkit"

import cocktailSlice from "./cocktailSlice"
import languageSlice from "./languageSlice"

const store = configureStore({
	reducer: {
		cocktails: cocktailSlice.reducer,
		language: languageSlice.reducer,
	},
})

export default store
