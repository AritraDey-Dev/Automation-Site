import InfoBar from "@/components/infobar";
import  Sidebar  from "@/components/Sidebar";
import React, { Children } from "react";
type Props={children:React.ReactNode}

const Layout=(props:Props)=>{
    return (
        <div className="flex overflow-hidden h-screen">
            <Sidebar/>
            <div className="w-full">
            <InfoBar/>
                {props.children}</div>
        </div>
    )

}

export default Layout;