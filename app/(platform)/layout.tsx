import { 
    ClerkProvider,
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    useAuth,
} from "@clerk/nextjs";
import { Toaster } from "sonner";
import { auth } from "@clerk/nextjs/server";
import { useRouter } from "next/router";
// import { Toaster } from "sonner";

// import { ModalProvider } from "@/components/providers/modal-provider";
// import { QueryProvider } from "@/components/providers/query-provider";

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
        >ß
            <Toaster/>
                {children}
                {/* <QueryProvider>
                    <Toaster/>
                    <ModalProvider/> */}
                {/* </QueryProvider> */}
        </ClerkProvider>
    )
}

export default PlatformLayout;