import { List } from "@prisma/client"
import { ListForm } from "./list-form";

interface ListHeaderProps {
    data: List
    isEditing: boolean;
    enableEditing: () => void;
    // disableEditing: () => void;
}

export const ListHeader = ({
    data,
    isEditing,
    enableEditing,
    // disableEditing
}:  ListHeaderProps
) => {
    return(

        <div>
            <div>
                <button>
                    Edit list
                </button>
                {data.title}
                
            </div>        
        </div>
    )
}