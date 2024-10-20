import { FaProjectDiagram, FaGrinHearts } from 'react-icons/fa';
import { Link, usePage } from "@inertiajs/react"

const SideBar = () => {

    const { url } = usePage();

    return(
        <>
            <div className="w-[240px] bg-white border-r-2 border-gray-300 h-screen fixed py-2 flex flex-col z-0">
                <h1 className="text-gray-900 font-bold italic w-[100%] flex justify-center border-b-2 border-gray-300 pb-2">flow-tracker</h1>
                <div className="py-4 px-4 flex gap-1 flex-col">
                    <h1 className='text-gray-800 text-xs font-semibold ml-2 mb-2'>Main Menu</h1>
                    <Link href="/dashboard" className={url === "/dashboard" ? "text-gray-800 font-semibold w-[100%] flex cursor-pointer bg-gray-200 py-[2px] hover:bg-black/20 border-none rounded-md px-5" : "text-gray-800 font-semibold w-[100%] flex py-[2px] px-2 cursor-pointer hover:bg-gray-200 border-none rounded-md hover:px-5 transition-all" }><FaProjectDiagram className='cursor-pointer mt-1 mr-2 text-gray-800'/>Dashboard</Link>
                    <Link href="/setting" className={url === "/setting" ? "text-gray-800 font-semibold w-[100%] flex cursor-pointer bg-gray-200 py-[2px] hover:bg-black/20 border-none rounded-md px-3" : "text-gray-800 font-semibold w-[100%] flex py-[2px] px-2 cursor-pointer hover:bg-gray-200 border-none rounded-md hover:px-5 transition-all" }><FaGrinHearts className='cursor-pointer mt-1 mr-2 text-gray-800'/>Setting</Link>
                    
                </div>

            </div>
        </>
    );
}

export default SideBar;