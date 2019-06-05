export const state = () => ({
    apple: 0,
    orange: 0
})
  
export const mutations = {
    addApple (state) {
        state.apple += 1
    },
    removeApple (state) {
        state.apple -= 1
    },
    addOrange (state) {
        state.orange += 1
    },
    removeOrange (state) {
        state.apple -= 1
    }
}