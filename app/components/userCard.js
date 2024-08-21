import React from 'react'

const userCard = ({ userData }) => {

    return (
        <div
            className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-center w-full" src='https://images.unsplash.com/photo-1538947151057-dfe933d688d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={userData.imageUrl} alt='Woman looking front' />
            </div>
            <div className="text-center py-8">
                <h2 className="font-semibold">{userData.fullName}</h2>
                <p className="text-gray-500">User Access: {userData.publicMetadata.accessType}</p>
            </div>
        </div>
    )
}

export default userCard