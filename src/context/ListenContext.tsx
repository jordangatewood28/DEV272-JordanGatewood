import { createContext, useContext, useState, type ReactNode } from "react";


type ListenContextValue = {
    listen: string[];
    isListen: (id: string) => boolean;
    toggleListen: (id: string) => void;
};

const ListenContext = createContext<ListenContextValue | null>(null);

export function ListenProvider({ children }: { children: ReactNode}) {
    const [listen, setListen] = useState<string[]>([]);

    const isListen = (id: string) => listen.includes(id);
    const toggleListen = (id: string) =>
        setListen((current) =>
            current.includes(id) ? current.filter((f) => f !== id) : [...current, id],
        );

    return (
        <ListenContext.Provider
            value={{ listen, isListen, toggleListen }}
        >
            {children}
        </ListenContext.Provider>
    )
}

export function useListen() {
    const ctx = useContext(ListenContext);
    if (!ctx)
        throw new Error("useListen must be used inside ListenProvider");
    return ctx;
}