
import { SignIn } from '@clerk/nextjs'
import React from 'react'



function Page() {
    

    return (
        <div className=" flex h-screen justify-center items-center align-middle">
            <SignIn forceRedirectUrl={"/dashboard"}/>
        </div>
        
    )
}

export default Page
