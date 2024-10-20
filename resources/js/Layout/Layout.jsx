import SideBar from '../Components/SideBar';

const Layout = ({children}) => {
    return(
        <div className="flex bg-white w-screen h-screen">
            <SideBar />
            <div className="ml-[240px] w-[100%]">
                {children}
            </div>
        </div>
    );
}

export default Layout;