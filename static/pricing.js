import * as pricingLogic from '@edenlife/eden-pricing-module'

// pricingLogic.setEnv("production")
pricingLogic.setEnv("develop")
console.log(process.env.NODE_ENV)
export const pricing = (config) =>
  pricingLogic.pricing({ location: 'NG', config })
