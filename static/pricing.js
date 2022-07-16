import * as pricingLogic from '@edenlife/eden-pricing-module'

pricingLogic.setEnv('production')
export const pricing = (config) =>
  pricingLogic.pricing({ location: 'NG', config })
