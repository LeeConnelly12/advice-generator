export default () => ({
  advice: {},
  loading: false,

  init() {
    this.getAdvice()
  },

  async getAdvice() {
    this.loading = true

    this.advice = await (await fetch('https://api.adviceslip.com/advice')).json()

    setTimeout(() => {
      this.loading = false
    }, 2000)
  },

  trigger: {
    ['@click.throttle.2000ms']() {
      this.getAdvice()
    },
    [':disabled']() {
      return this.loading
    },
  },
})
