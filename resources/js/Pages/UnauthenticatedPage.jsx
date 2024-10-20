import {FaDoorClosed} from 'react-icons/fa'
import { Link } from '@inertiajs/react';

const UnauthenticatedPage = () => {
    return(
        <>
            <div className="h-screen bg-white flex flex-col justify-center gap-2 w-screen items-center gap-4">
                <h1 className='font-bold text-2xl'>You're Unauthenticated.</h1>
                <Link href="/" replace className="bg-gray-800 text-white py-2 px-7 rounded-md transition-all hover:-translate-y-1 duration-150 hover:shadow-[0px_0px_5px_1px_#bfbfbf] hover:font-semibold">Login</Link>
            </div>
        </>
    )
}

export default UnauthenticatedPage;