'use client'

import UserCard from './components/userCard'
import './globals.css'

import { useUser } from '@clerk/nextjs'

export default function RootLayout({children}) {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className='flex pt-24'>
      <UserCard userData={user} />
    </div>
  )
}