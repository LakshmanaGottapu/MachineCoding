import TabForm from "../Components/TabForm"
function MultiTabPage() {
    const tabs = [
        { tabName:'profile', formItems:['name', 'age'] },
        { tabName:'interests', formItems:['hobby', 'passion'] },
        { tabName:'about', formItems:['father', 'place', 'occupation'] },
    ]
  return (
    <div>
      <h1>MultiTabPage</h1>
      <TabForm tabs={tabs}/>
    </div>
  )
}

export default MultiTabPage
