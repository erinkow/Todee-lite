// import { Navbar } from "./_components/navbar";

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Navbar } from "./_components/navbar";

const DashboardLayout = ({children}: {
    children: React.ReactNode,
}) => {
    return(
        <div className="h-full">
            <Navbar/>
            {children}
        </div>
    )
}

export default DashboardLayout;

