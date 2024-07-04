import { Outlet } from "react-router-dom";
import Tab from "./Tab"
import { useState } from "react";

export default function Drawer({tabList}){
    const [route, setRoute] = useState(location.pathname);

    const mystyle = {
        display: "flex",
        flexDirection: "row",
        gap: "1px",
        height: "30px",
        overflow: "hidden",
    };

    return (
        <section style={{height: "100%"}}>
            <div 
                style={mystyle}
            >
                {tabList.map((tab, i) => {
                    return (<Tab key={"tabs" + i} title={tab.title} uri={tab.uri} route={route} setRoute={setRoute}/>)
                })}
            </div>
            <div 
                style={{
                    height: "calc(100% - 36px)",
                    padding: "2px",
                    border: "solid 1px #222",
                }}
            >
                <Outlet/>
            </div>
        </section>
    );
}