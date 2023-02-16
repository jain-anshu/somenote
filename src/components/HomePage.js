import Header from "./Header";
import MenuBar from "./Menubar";
import Sidebar from "./Sidebar";
import Body from "./Body";

const HomePage = () => {
    return (
        <div className="homePage">
            <Sidebar />
            <div className="rightContainer">
                <Header />
                <MenuBar />
                <Body />
            </div>
            
        </div>
    )
}

export default HomePage;