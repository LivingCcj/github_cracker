class Env {
  constructor() {
    this.env = true
  }

  setEnv(env) {
    this.env = env
  }

  isDevMode() {
    if (this.env === null) {
      return true
    }
    return this.env.NODE_ENV === 'development'
  }
}

const env = new Env()
export default env
