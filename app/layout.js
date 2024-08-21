import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs';

import { auth, currentUser } from '@clerk/nextjs/server'
import { userUser } from '@clerk/nextjs'
import "./globals.css";

export const metadata = {
  title: "Clerk Admin",
  description: "Clerk admin boilerplate template",
};

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">

              <p className="">BC Portal</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#">How it works</a>
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#">Pricing</a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <SignedOut>
              <SignInButton>
                <a className="border px-4 py-2 rounded-xl bg-gray-100 hover:bg-white cursor-pointer">Sign In</a>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='mt-28'>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
