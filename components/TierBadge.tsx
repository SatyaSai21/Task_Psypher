import { Tier } from '@/lib/utils'


export default function TierBadge({ tier }: { tier: Tier }) {
  const colors: Record<Tier, string> = {
    free: 'bg-gray-500',
    silver: 'bg-gray-400',
    gold: 'bg-yellow-500',
    platinum: 'bg-purple-600',
  };

  return (
    <span className={`inline-block text-xs font-semibold text-white px-2 py-1 rounded-full uppercase tracking-wide ${colors[tier]}`}>
      {tier}
    </span>
  );
}

