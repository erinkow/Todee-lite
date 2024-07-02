import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return(
        <nav className="fixed z-50 top-0 px-7 w-full h-16 border-b shadow-sm bg-neutral-50 items-center 2xl:px-52">
            <div className="flex flex-row justify-between items-center gap-x-4 w-full h-full">
                <div className="flex items-center">
                    Logo
                </div>
                <div className="ml-auto flex items-center gap-x-2">
                    <UserButton
                        afterSignOutUrl="/sign-in"
                        appearance={{
                            elements: {
                                avatarBox: {
                                    header: 35,
                                    width: 35
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </nav>
    )
}