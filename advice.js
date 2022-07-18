export default () => ({
  advice: {},
  init() {
    this.getAdvice()
  },
  async getAdvice() {
    this.advice = await (await fetch('https://api.adviceslip.com/advice')).json()
  },
})
