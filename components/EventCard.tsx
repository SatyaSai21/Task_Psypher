import TierBadge from "./TierBadge";
import { Tier } from "@/lib/utils";

type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: Tier;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="w-full sm:w-64 md:w-72 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white overflow-hidden">
      <img
        src={event.image_url}
        alt={event.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{event.description}</p>
        <TierBadge tier={event.tier} />
        <p className="text-xs text-gray-500 mt-2">
          {new Date(event.event_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

