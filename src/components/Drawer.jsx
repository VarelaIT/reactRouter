import Tab from "./Tab"

export default function Drawer({tabList, children}){
    return (
        <section style={{height: "100%"}}>
            <div 
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1px",
                    height: "30px",
                    overflow: "hidden",
                }}
            >
                {tabList.map((tab, i) => {
                    return (<Tab key={"tabs" + i} title={tab.title} uri={tab.uri} />)
                })}
            </div>
            <div 
                style={{
                    height: "calc(100% - 36px)",
                    padding: "2px",
                    border: "solid 1px #222",
                }}
            >
                {children}
            </div>
        </section>
    );
}