import React from 'react'
import { checkRole } from '../../../utils/roles'
import { redirect } from 'next/navigation'



async function Admin() {
    const isAdmin = await checkRole('Admin')
    if (!isAdmin) {
      redirect('/')
    }
 
    return (
        <div className='px-10 text-2xl'>
            Admin Page
        </div>
    )
}

export default Admin
