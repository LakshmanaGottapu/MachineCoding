import { useState, useReducer, MouseEvent } from "react"
import Tab from "./Tab";
type TabType = {tabName:string, formItems:string[], submitForm?:()=>void}
function TabForm({tabs}:{tabs:TabType[]}) {
    const [currentTab, setCurrentTab] = useState<string>(tabs[0].tabName);
    const acc:Record<string, Record<string, string | number>> = {}
    const initialState = tabs.reduce((acc, tab) => {
            acc[tab.tabName] = {}
            return acc;
        },acc)
    function reducer(state:Record<string, Record<string, string|number>>, action:{tabName:string, payLoad:Record<string, string|number>}){
        console.log('reducer')
        const newState = {...state}
        newState[action.tabName] = action.payLoad
        return newState;
    }
    const [tabState, dispatch] = useReducer(reducer, initialState);
    function handleTabSwitch(e:MouseEvent){
        if((e.target as HTMLDivElement).className !== currentTab)
            setCurrentTab((e.target as HTMLDivElement).className);
    }
    return (
        <>
            <nav onClick={handleTabSwitch}>
                {tabs.map(tab => <button className={tab.tabName} key={tab.tabName} style={tab.tabName==currentTab ? {border: '2px solid black'} : {border:'1px solid black'}}>{tab.tabName}</button>)}
            </nav>
            {tabs.filter(tab => tab.tabName === currentTab).map(tab => <Tab key={tab.tabName} tabName={tab.tabName} data={tabState[tab.tabName]} setData={dispatch}  formItems={tab.formItems} />)}
        </>
    )
}

export default TabForm
