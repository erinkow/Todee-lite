import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local";
import { cn } from "@/lib/utils"

const headingFont = localFont({
    src: "../public/fonts/font.woff2"
})

export const Logo2 = () => {
    return(
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={100}
                    width={100}
                    className="rounded-md"
                />
                <p className={cn(
                    "text-4xl text-neutral-800 pt-1 ml-2",
                    headingFont.className
                    )}>
                    Todee-lite
                </p>
            </div>
        </Link>
    )
}