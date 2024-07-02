import { Blend } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import { SignIn } from "@/components/signin";

export const Navbar = async () => {
    return(
        <div className="flex items-center justify-around h-20">
            <div className="flex">
                Logo
            </div>
            <div>
                <Button
                    asChild
                    size='sm'
                    variant='ghost'
                    className="mr-4 w-20"
                >
                    <Link href='/sign-up'>
                        Sign-up
                    </Link>
                </Button>
                <Button
                    asChild
                    size='sm'
                    variant='ghost'
                    className="mr-4 w-20"
                >
                    <Link href='/sign-in'>
                        Sigin-in
                    </Link>
                </Button>
            </div>
        </div>
    )
}