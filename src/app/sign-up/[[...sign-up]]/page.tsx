
import { SignUp } from '@clerk/nextjs'
import React from 'react'

function Page() {
    

    return (
        <div className=" flex h-screen justify-center items-center ">
            <SignUp forceRedirectUrl={"/dashboard"}/>
        </div>
        
    )
}

export default Page
