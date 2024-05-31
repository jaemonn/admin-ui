import { useState, createContext, useContext } from "react";

const SidebarContext = createContext()
const SidebarOpenContext = createContext()

export const useOpen = () => {
    return useContext(SidebarContext)
}

export const useUpdateOpen = () => {
    return useContext(SidebarOpenContext)
}

export const SidebarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <SidebarContext.Provider value={open}>
            <SidebarOpenContext.Provider value={toggleSidebar}>
                {children}
            </SidebarOpenContext.Provider>
        </SidebarContext.Provider>
    )

}