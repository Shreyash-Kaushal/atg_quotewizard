import './App.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import React, { useEffect, useState,useRef } from 'react';
import CustomerInformation from './Components/CustomerInformation';
import Forecasting from './Components/Forecasting';
import Notes from './Components/Notes';
import QuoteProducts from './Components/QuoteProducts';
import SelectProducts from './Components/SelectProducts';
import Summary from './Components/Summary';

function App() {
  const tabRef = useRef(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabData = [
    { header: { text: "1. Customer Information" }, content: <CustomerInformation onNext={() => changeTab(1)} /> },
    { header: { text: "2. Forecasting" }, content: <Forecasting onNext={() => changeTab(2)} onBack={() => changeTab(0)} /> },
    { header: { text: "3. Notes" }, content: <Notes onNext={() => changeTab(3)} onBack={() => changeTab(1)} /> },
    { header: { text: "4. Select Products" }, content: <SelectProducts onNext={() => changeTab(4)} onBack={() => changeTab(2)} /> },
    { header: { text: "5. Quote Products" }, content: <QuoteProducts onNext={() => changeTab(5)} onBack={() => changeTab(3)} /> },
    { header: { text: "6. Summary" }, content: <Summary  onBack={() => changeTab(4)} /> }
  ];

  const changeTab = (index) => {
    setCurrentTabIndex(index);
    if (tabRef.current) {
      tabRef.current.select(index);
    }
  };
  return (
    <div className="App">
      <div className='main-heading'>Sale Quote Wizard</div>
      <TabComponent ref={tabRef} selected={changeTab} heightAdjustMode='Auto'>
        <TabItemsDirective>
          {
            tabData.map((tab, index) =>
              <TabItemDirective
                key={index}
                header={tab.header}
                content={() => tab.content}
              />
            )
          }


        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}

export default App;
