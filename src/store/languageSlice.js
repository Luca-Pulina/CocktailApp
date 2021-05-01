import { createSlice } from "@reduxjs/toolkit"

const languageSlice = createSlice({
	name: "language",
	initialState: {
		settedLang: "en",
	},
	reducers: {
		setLanguage(state, action) {
			state.settedLang = action.payload
		},
	},
})

export const languageActions = languageSlice.actions

export default languageSlice
