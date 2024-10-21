import { FaProjectDiagram, FaCheck } from 'react-icons/fa';
import { GrAdd } from 'react-icons/gr';
import { Link, usePage, router } from "@inertiajs/react"
import { useEffect, useState } from 'react';
import axios from 'axios';

const SideBar = () => {

    const { url } = usePage();
    const { props } = usePage();

    const csrfToken = props.csrf_token;
    const user = props.auth.user;

    return(
        <>
            <div className="w-[240px] bg-white border-r-2 border-gray-300 h-screen fixed py-2 flex flex-col z-0">
                <div className="w-[100%] border-b-2 border-gray-300 pb-2 flex gap-2">
                    <h1 className="text-white font-bold ml-5 bg-gray-800 border-none rounded-md px-2 flex justify-center">{user.username[0]}</h1><h1>{user.username}</h1> 
                </div>
                <div className="py-4 px-4 flex gap-1 flex-col">
                    <h1 className='text-gray-800 text-xs font-semibold ml-2 mb-2'>Main Menu</h1>
                    <Link href="/dashboard" className={url === "/dashboard" ? "text-gray-800 font-semibold w-[100%] flex cursor-pointer bg-gray-200 py-[2px] hover:bg-black/20 border-none rounded-md px-5 transition-all" : "text-gray-800 font-semibold w-[100%] flex py-[2px] px-3 cursor-pointer hover:bg-gray-200 border-none rounded-md hover:px-5 transition-all" }><FaProjectDiagram className='cursor-pointer mt-1 mr-2 text-gray-800'/>Dashboard</Link>
                    <Link href="/completed-task" className={url === "/completed-task" ? "text-gray-800 font-semibold w-[100%] flex cursor-pointer bg-gray-200 py-[2px] hover:bg-black/20 border-none rounded-md px-5 transition-all" : "text-gray-800 font-semibold w-[100%] flex py-[2px] px-3 cursor-pointer hover:bg-gray-200 border-none rounded-md hover:px-5 transition-all" }><FaCheck className='cursor-pointer mt-1 mr-2 text-gray-800'/>Completed Task</Link>
                    <h1 className='text-gray-800 text-xs font-semibold ml-2 mt-4'>Operational</h1>
                    <Link href="/new-task" className={url === "/new-task" ? "text-gray-800 w-[100%] flex cursor-pointer bg-gray-200 py-[2px] hover:bg-black/20 border-none rounded-md px-3" : "text-gray-800 w-[100%] flex text-md py-[2px] px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border-none rounded-md transition-all mt-1" }><GrAdd className='cursor-pointer mt-1 mr-2 text-gray-800'/>New Task</Link>
                </div>


            </div>
        </>
    );
}

export default SideBar;