import React, { useState } from "react"

interface Links{
    label:string,
    url:string
}

interface Pages{
    page:string,
    url:string,
    Submenu:boolean|null,
    links?:Links[]
}

interface appProps{
    isSidebarOpen:boolean,
    pages:Pages ,
    openSidebar:()=>void,
    closeSidebar:()=>void,
    setPages:(pages:Pages)=>void,
}

export const appContext = React.createContext<appProps>({
    isSidebarOpen:false,
    pages:{page:"",url:"",Submenu:null,links:[]},
    openSidebar:()=>{},
    closeSidebar:()=>{},
    setPages:()=>{},
})

export const AppProvider:React.FC <{children:React.ReactNode}>= ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false)
    const [pages,setPages] = useState<Pages>({page:"",url:"",Submenu:null,links:[]})

    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }

    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }

    return (
        <appContext.Provider value={{isSidebarOpen,pages,openSidebar,closeSidebar,setPages}}>
            {children}
        </appContext.Provider>
    )
}