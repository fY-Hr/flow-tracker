import { FaCheck } from "react-icons/fa";
import Layout from "../Layout/Layout.jsx";
import Header from "../Components/Header.jsx";


const CompletedTaskPage = () => {
    return(
        <>
            <Layout>
                <title>flow-tracker - Completed</title>
                <div className="flex flex-col w-[100%]">
                    <Header pageTitle={'Completed Task'}/>
                </div>
            </Layout>
        </>
    )
}

export default CompletedTaskPage;