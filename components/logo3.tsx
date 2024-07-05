import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local";
import { cn } from "@/lib/utils"

const headingFont = localFont({
    src: "../public/fonts/font.woff2"
})

// icon only logo
export const Logo3 = () => {
    return(
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 md:hidden">
                <Image
                    src="/logo-IconOnly.png"
                    alt="Logo"
                    height={60}
                    width={60}
                    className="rounded-md"
                />
            </div>
        </Link>
    )
}