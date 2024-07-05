import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo2 } from "@/components/logo2";

const headingFont = localFont({
  src: '../../public/fonts/font.woff2'
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]
})

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col mt-28">
      <h1 className={cn("text-4xl mb-10", headingFont.className)}>
       <Logo2/>
      </h1>
      <div className="">
        <p className={cn('mx-20 text-center text-lg items-center text-neutral-700', textFont.className)}>Todee will navigate your daily life. <br />Click below and manage your todos for free!</p>
          <Link href='/sign-up' className="flex mt-8 justify-center">
            <Button
              size='lg'
              variant='outline'
              className="text-lg text-neutral-700"
            >
              Sign-up
            </Button>
          </Link>
      </div>
    </div>
  );
}
