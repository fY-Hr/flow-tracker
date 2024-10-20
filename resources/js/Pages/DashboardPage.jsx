import { Inertia } from "@inertiajs/inertia";
import Layout from "../Layout/Layout.jsx"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react";
import Header from '../Components/Header.jsx'

const DashboardPage = () => {

    const { props } = usePage();

    return (
        <>
            <Layout>
                <title>flow-tracker - Dashboard</title>
                <div className="flex flex-col w-[100%]">
                    <Header pageTitle={'Dashboard'}/>
                </div>
            </Layout>
        </>
        
    );
};

export default DashboardPage;