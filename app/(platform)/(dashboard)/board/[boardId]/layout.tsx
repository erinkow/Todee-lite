import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const BoardIdLayout = async({
    children,
    params
}: {
    children: React.ReactNode;
    params: {boardId: string};
}) => {
    const { userId } = auth();

    if(!userId) {
        redirect('/sign-in')
    }
    
    params.boardId = userId;

    return(
        <div 
            className="relative h-screen bg-no-repeat bg-cover bg-center"
            // style={{backgroundImage: `url(${board.imageFullUrl})`}}
        >
            {/* <BoardNavbar data={board}/> */}
            <main className="relative pt-[7rem] bg-slate-200 w-full h-full">
                {children}
            </main>
        </div>
    );   
};

export default BoardIdLayout;