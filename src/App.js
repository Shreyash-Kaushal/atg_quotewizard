import './App.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import React, { useEffect, useState } from 'react';
import CustomerInformation from './Components/CustomerInformation';
import Forecasting from './Components/Forecasting';
import Notes from './Components/Notes';
import QuoteProducts from './Components/QuoteProducts';
import SelectProducts from './Components/SelectProducts';
import Summary from './Components/Summary';

function App() {
  const tabData = [
    { header: { text: "1. Customer Information" }, content: <CustomerInformation /> },
    { header: { text: "2. Forecasting" }, content: <Forecasting /> },
    { header: { text: "3. Notes" }, content: <Notes /> },
    { header: { text: "4. Select Products" }, content: <SelectProducts /> },
    { header: { text: "5. Quote Products" }, content: <QuoteProducts /> },
    { header: { text: "6. Summary" }, content: <Summary /> }
  ];
  return (
    <div className="App">
      <h1>Sale Quote Wizard</h1>
      <TabComponent heightAdjustMode='Auto'>
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
