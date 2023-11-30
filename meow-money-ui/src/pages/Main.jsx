import { Outlet, useLoaderData } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Main = () => {
    const { userName } = useLoaderData();

    return (
        <div className="layout">
            <NavigationBar userName={userName}/>
            <main>
                <Outlet />
            </main>
            <img src={wave} size={50}/>
        </div>
    )
}

export default Main;