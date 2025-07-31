'use client'
import { SignInButton, SignUpButton, SignOutButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const { isSignedIn, user } = useUser()

  return (
    <main className="p-10">
      {isSignedIn ? (
        <>
          <h1 className="text-2xl">Welcome {user.fullName}</h1>
          <Link href="/events" className="text-blue-500 underline">View Events</Link>
          <div className="mt-4"><SignOutButton /></div>
        </>
      ) : (
        <div>
          <h1 className="text-3xl mb-4">Welcome to Tier-Based Event Showcase</h1>
          <div className="space-x-4">
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </div>
        </div>
      )}
    </main>
  )
}
