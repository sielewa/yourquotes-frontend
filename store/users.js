export const actions = {
    async createUser ({ commit }, payload) {
        const res = await this.$axios.$post('/api/users/hello', payload)
    }
}