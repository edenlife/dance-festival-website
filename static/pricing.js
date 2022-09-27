import * as pricingLogic from '@edenlife/eden-pricing-module'

pricingLogic.setEnv(process.env.NODE_ENV === "production" ? "production" : "develop")
console.log(process.env.NODE_ENV)
export const pricing = (config) =>
  pricingLogic.pricing({ location: 'NG', config })
