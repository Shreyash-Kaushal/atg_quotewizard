import React, { useState } from 'react';
import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Page, Sort } from '@syncfusion/ej2-react-grids';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Style/SelectProducts.css'
function SelectProducts() {
    const pageSettings = { pageSize: 6 };
    const sampleManufacturerData = [
        { Id: 'Bimbox', Game: 'Bimbox' },
        { Id: 'ATG', Game: 'ATG USA' },
        { Id: 'Bluebeam', Game: 'Bluebeam' },

    ];
    const manufacturerfields = { text: 'Game', value: 'Id' };
    return (
        <div className="parent-container">
            <div className='container'>
                <div className='heading-div'>Quote Details</div>
                <div className='checkbox-container'>
                    <MultiSelectComponent id="checkbox1" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="Select Manufacturer" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                    <MultiSelectComponent id="checkbox2" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="Select Product Group" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                    <MultiSelectComponent id="checkbox3" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="Select Product Line Description" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                    <MultiSelectComponent id="checkbox4" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="Select License Type" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                    <MultiSelectComponent id="checkbox5" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="Select Contract Term" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                    <MultiSelectComponent id="checkbox6" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="Select Deployement" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                    <MultiSelectComponent id="checkbox6" dataSource={sampleManufacturerData} fields={manufacturerfields} placeholder="SKU Lookup" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                </div>
                <div className='search-div'>
                    <div className='serial-div'>
                        <TextField id="serialNo" label="Serial Number" variant="standard" />
                        <Button variant="outlined">Lookup SKU</Button>
                    </div>
                    <div>
                        <Button variant="outlined">Reset Filter</Button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='heading-div'>Product Details</div>
                <div className='container'>
                    <GridComponent allowPaging={true} pageSettings={pageSettings} height={500}>
                        <ColumnsDirective>
                            <ColumnDirective field='Add' type='checkbox' width='20' headerCheckboxSelection={true} />
                            <ColumnDirective field='Description' width='100' textAlign="center" />
                            <ColumnDirective field='Unit Price' width='30' textAlign='center' />
                            <ColumnDirective field='Unit Cost' width='30' textAlign="center" />
                        </ColumnsDirective>
                        <Inject services={[Page, Sort]} />
                    </GridComponent>
                </div>
                <div className="button-container">
                    <Button variant="contained">Back</Button>
                    <Button variant="contained">Next</Button>
                </div>
            </div>


        </div>
    );
}

export default SelectProducts;