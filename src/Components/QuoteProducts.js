import React, { useState } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Page, Sort, Inject } from '@syncfusion/ej2-react-grids';
import Button from '@mui/material/Button';
import '../Style/QuoteProducts.css'

function QuoteProducts({ onNext, onBack }) {
    const pageSettings = { pageSize: 6 };
    return (
        <div className="parent-container">
            <div className='container'>
                <div className='heading-div'>Product Details</div>
                <div className='container'>
                    <GridComponent allowPaging={true} pageSettings={pageSettings} height={500}>
                        <ColumnsDirective>
                            <ColumnDirective field='Add' type='checkbox' width='20' headerCheckboxSelection={true} />
                            <ColumnDirective field='Description' width='100' textAlign="center" />
                            <ColumnDirective field='Unit Price' width='30' textAlign='center' />
                            <ColumnDirective field='Qty' width='30' textAlign="center" />
                            <ColumnDirective field='Dis $' width='30' textAlign="center" />
                            <ColumnDirective field='Unit Cost' width='30' textAlign="center" />
                            <ColumnDirective field='Tax' width='30' textAlign="center" />
                            <ColumnDirective field='Total' width='30' textAlign="center" />
                        </ColumnsDirective>
                        <Inject services={[Page, Sort]} />
                    </GridComponent>
                </div>
                <div className='total-div'>
                    Total : $0
                </div>
                <div className="button-container">
                    <Button variant="contained" onClick={onBack}>Back</Button>
                    <Button variant="contained" onClick={onNext}>Next</Button>
                </div>
            </div>
        </div>
    );
}

export default QuoteProducts;