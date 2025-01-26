import TabForm from "../Components/TabForm"
function MultiTabPage() {
    const tabs = [
        { tabName:'profile', formItems:['name', 'age'] },
        { tabName:'interests', formItems:['hobby', 'passion'] },
        { tabName:'about', formItems:['father', 'place', 'occupation'] },
    ]
  return (
    <>
      <TabForm tabs={tabs}/>
    </>
  )
}

export default MultiTabPage
