import Layout from "../Layout/Layout.jsx";
import Header from "../Components/Header.jsx";

const NewTaskPage = () => {
    return (
        <>
            <Layout>
                <title>flow-tracker - Completed</title>
                <div className="flex flex-col w-[100%]">
                    <Header pageTitle={'New Task'}/>
                </div>
                
            </Layout>
        </>
    )
}

export default NewTaskPage;