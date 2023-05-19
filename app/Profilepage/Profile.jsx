import React from 'react'
import Image from 'next/image'

import  CgProfile  from 'react-icons/cg'

const Profile=() => {
  const profileData = [
    {
      icon: CgProfile,
      Name: 'Profile',
      
    },
    
    
  ]
  

  const profiles = profileData.map(profile => (
    
  <div className="border-b-2 pb-2 ml-8 mt-10 border-black w-36">
  <aside className='flex flex-row '>
  {profile.icon}
  <p className='font-semibold ml-8'>{profile.Name}</p>
  </aside>
  </div>

  ))
  return (
    <div>
      {profiles}
    </div>
  )
}

export default Profile