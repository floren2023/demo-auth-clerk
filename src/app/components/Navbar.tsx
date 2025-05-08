"use client"
import React from 'react'
import {
    
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

function Navbar() {
    

    return (
        <header className="flex justify-end items-center p-4 gap-4 h-16 sicky shadow-sm px-20 shadow-gray-200">
        <SignedOut>
          <SignInButton/>
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
        
    )
}

export default Navbar
