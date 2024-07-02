import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Free todo
      </h1>
      <div className="flex">
        <p>Click below and manage your todos for free!</p>
        <Button
          size='sm'
          variant='ghost'
        >
          Sign-up
          <Link href='/sign-up'/>
        </Button>
      </div>
    </div>
  );
}
