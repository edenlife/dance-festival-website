import * as pricingLogic from '@edenlife/eden-pricing-module'

export const pricing = (config) =>
  pricingLogic.pricing({ location: 'NG', config })
