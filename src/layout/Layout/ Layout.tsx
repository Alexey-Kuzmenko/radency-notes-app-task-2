import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            {/* Header */}
            <main>
                {/* Container */}
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;