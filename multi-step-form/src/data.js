export const plans = [
  {
    id: 'plan_arcade',
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
  },
  {
    id: 'plan_advanced',
    name: 'Advanced',
    monthly: 12,
    yearly: 120,
  },
  {
    id: 'plan_pro',
    name: 'Pro',
    monthly: 15,
    yearly: 150,
  },
]

export const findPlan = (name) => {
  return plans.filter(plan => plan.name === name)
} 

export const planAddons = [
  {
    id: 'addon_online_service',
    name: 'onlineService',
    title: 'Online service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10,
  },
  {
    id: 'addon_larger_storage',
    name: 'largerStorage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20,
  },
  {
    id: 'addon_customizable_profile',
    name: 'customizableProfile',
    title:'Customizable profile',
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20,
  },
]

//FIX: This does not work well, not only if it includes but also if its TRUE
export const findAddons = (addons) => {
  return planAddons.filter((addon) => Object.keys(addons).includes(addon.name))
}
