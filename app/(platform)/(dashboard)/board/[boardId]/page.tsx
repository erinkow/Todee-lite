import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { Link } from "lucide-react";
import { redirect } from "next/navigation";
import { ListContainer } from "./_components/list-container";
import { List } from "@prisma/client";
import { db } from "@/lib/db";

interface BoardIdPageProps {
    params: {
        boardId: string;
    },
    data: List,
}

const BoardIdPage: React.FC<BoardIdPageProps>= async ({
    params,
    data
}) => {
    const { userId } = auth();

    if(!userId) {
        redirect('/sign-in');
    }

    const boardId = userId;

    const lists = await db.list.findMany({
        where: {boardId: boardId},
        orderBy: {order: 'asc'},
    });
    

    return(
        <div className="p-10 h-full overflow-x-auto">
            Board Id '{params.boardId}' page!
            <div className="flex justify-center items-center top-11">
                <ListContainer 
                    data={lists}
                />
            </div>
        </div>
    );
};

export default BoardIdPage;