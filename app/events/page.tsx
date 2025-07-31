"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import EventCard from "@/components/EventCard";
import { tierRank, Tier, isTier } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const supabase = createClient();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const userTier: Tier = isTier(user?.publicMetadata?.tier as string)
    ? (user?.publicMetadata?.tier as Tier)
    : "free";
  console.log("User Tier:", userTier);
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }

    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      console.log("Fetched events:", data);
      if (error) console.error(error);
      else {
        const filtered = data.filter(
          (e) => tierRank(e.tier) <= tierRank(userTier)
        );
        setEvents(filtered);
      }
      setLoading(false);
    };

    if (isSignedIn) fetchEvents();
  }, [isSignedIn, userTier]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Events for:{" "}
        <span className="text-blue-600">{userTier.toUpperCase()}</span>
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 mt-10">Loading events...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
