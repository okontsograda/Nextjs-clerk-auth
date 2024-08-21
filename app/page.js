'use client'

import UserCard from './components/userCard'
import PreviewCard from './components/previewCard'
import './globals.css'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function RootLayout({ children }) {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className='flex justify-center items-center pt-24'>
      {/* <UserCard userData={user} /> */}

      <div className='flex gap-4 mt-12'>

        {user.publicMetadata?.expenses && (
          <PreviewCard
            cardTitle="Expenses"
          />
        )}

        {user.publicMetadata?.members && (
          <Link href="/members">
            <PreviewCard
              cardTitle="Members"
            />
          </Link>
        )}

      </div>

    </div>
  )
}