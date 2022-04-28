export const state = () => ({
	quotes: []
})

export const mutations = {
	SET_QUOTES(state, quotes) {
		state.quotes = quotes
	}
}

export const getters = {
	getQuotes(state) {
		return state.quotes
	}
}

export const actions = {
	async createQuote({ commit, disptach }, payload) {
		return await this.$axios.$post('/api/quote', payload)
	},

	async getQuotes({ commit }, requestQuery) {
		return await this.$axios.$get('/api/quote', { params: requestQuery })
	},
	async deleteQuote({ commit }, payload) {
		return await this.$axios.$delete(`/api/quote/${payload}`)
	}
}
