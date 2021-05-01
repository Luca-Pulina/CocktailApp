import { configureStore } from "@reduxjs/toolkit"

import cocktailSlice from "./cocktailSlice"

const store = configureStore({
	reducer: { cocktails: cocktailSlice.reducer },
})

export default store
