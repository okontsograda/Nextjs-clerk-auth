import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Members = () => {
    const { userId } = auth()

    if (!userId) {
        return (
            redirect('/sign-in')
        )
    }

    return (
        <div className='flex justify-center'>Show members information</div>
    )
}

export default Members