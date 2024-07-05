import { Logo } from "@/components/logo";
import { Logo3 } from "@/components/logo3";
import { UserButton } from "@clerk/nextjs"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Link } from "lucide-react";

export const Navbar = async () => {
    const user = await currentUser();

    const email = user?.emailAddresses[0]?.emailAddress;

    return(
        <nav className="fixed z-50 top-0 px-7 w-full h-16 border-b shadow-sm bg-neutral-50 items-center 2xl:px-52">
            <div className="flex flex-row justify-around md:justify-between items-center gap-x-4 w-full h-full">
                <div className="flex items-center md:hidden">
                    <Logo3/>
                </div>
                <div className="flex items-center">
                    <Logo/>
                </div>
                <div className="flex ">
                    <div className="hidden md:block md:mr-3 md:text-neutral-600 md:mt-2">
                        {email}
                    </div>
                    <div className="ml-auto flex items-center gap-x-2">
                        <UserButton
                            afterSignOutUrl="/sign-in"
                            appearance={{
                                elements: {
                                    avatarBox: {
                                        height: 35,
                                        width: 35
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}