export default () => ({
  advice: {},
  loading: false,

  init() {
    this.getAdvice()
  },

  async getAdvice() {
    this.loading = true

    this.advice = await (await fetch('https://api.adviceslip.com/advice')).json()

    this.loading = false
  },
})
