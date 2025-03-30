import { createContext, useContext, useState, ReactNode } from "react";

interface ListContextProps {
    isEditing: boolean;
    setIsEditing: (value: boolean) => void;
    enableEditing: () => void;
    disableEditing: () => void;
}

const ListContext = createContext<ListContextProps | undefined>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
    const [isEditing, setIsEditing] = useState(false);

    const enableEditing = () => {
        setIsEditing(true);
    };

    const disableEditing = () => {
        setIsEditing(false);
    };

    return (
        <ListContext.Provider value={{ isEditing, setIsEditing, enableEditing, disableEditing }}>
            {children}
        </ListContext.Provider>
    );
};

export const useListContext = () => {
    const context = useContext(ListContext);
    if (context === undefined) {
        throw new Error("useListContext must be used within a ListProvider");
    }
    return context;
};
