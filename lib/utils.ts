export type Tier = 'free' | 'silver' | 'gold' | 'platinum'

const tierOrder: Record<Tier, number> = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
}

export function tierRank(tier: string): number {
  if (isTier(tier)) return tierOrder[tier]
  return 0
}

export function isTier(value: any): value is Tier {
  return ['free', 'silver', 'gold', 'platinum'].includes(value)
}
