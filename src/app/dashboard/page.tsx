import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { checkRole } from '../../../utils/roles'
import { redirect } from 'next/navigation'


async function Dashboard() {
    const user = await currentUser()

    if (!user){ 
        
        redirect("/sign-in")
    }
    if(await checkRole("Admin")){
        redirect("/admin")
    }
    else{
        redirect("/client")
    }
        
        
    
}

export default Dashboard
