import { useForm, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

const Header = ({pageTitle}) => {

    const [isLogoutPopup, setIsLogoutPopup] = useState(false);

    const { props } = usePage();
    const csrfToken = props.csrf_token;


    const showLogoutPopup = () => {
        setIsLogoutPopup(true);
    }

    const closeLogoutPopup = () => {
        setIsLogoutPopup(false);
    }

    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        router.post('/logout', {
            _token: csrfToken
        }, {
            replace: true
        });
    }

    return (
        <>
            <div className="p-2 px-6 w-[100%]">
                <div className="flex justify-between border-b-2 border-gray-300 pb-2 w-[100%]">
                    <h1 className="text-gray-900 font-bold text-lg">{pageTitle}</h1>                
                    <button onClick={showLogoutPopup} className="font-semibold hover:bg-gray-200 px-3 py-1 border-none rounded-md">Log out</button>
                    

                </div>
            </div>
            {isLogoutPopup && (
                <div className="logoutPopup fixed w-screen h-screen -ml-[240px] flex justify-center items-center bg-black/50 z-50">
                    <div className="logoutBox w-[400px] bg-white border-none rounded-lg flex flex-col items-center p-4 gap-4">
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-xl">Are you sure,</h1>
                            <h1 className="font-bold text-xl">you want to Log out?</h1>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleLogout} className="bg-gray-800 text-white font-bold border-none rounded-md px-4 py-2 text-md hover:text-gray-300">Log out</button>
                            <button onClick={closeLogoutPopup} className="bg-gray-200 text-gray-800 font-bold border-none rounded-md px-6 py-2 text-md hover:bg-black/20">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;