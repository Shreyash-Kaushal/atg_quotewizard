import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Style/CustomerInformation.css'

function CustomerInformation() {
    return (
        <>

            <div className='parent-container'>
                <div className='container'>
                    <div className='heading-div'>Quote Information</div>
                    <div className='input-container'>
                        <TextField id="quoteName" label="Quote Name" variant="standard" />
                        <TextField id="contractManager" label="Contract Manager" variant="standard" />
                        <TextField id="customerPONumber" label="Customer PO Number" variant="standard" />
                        <TextField id="customerAccount" label="Customer Account" variant="standard" />
                        <TextField id="signatureContact" label="Signature Contact" variant="standard" />
                        <TextField id="opportunity" label="Opportunity" variant="standard" />
                    </div>
                    <div className='container'>
                        <div>
                            <div className='heading-div'>Bill To Address</div>
                            <div className='input-container'>
                                <TextField id="billName" label="Name" variant="standard" />
                                <TextField id="billStreet1" label="Street 1" variant="standard" />
                                <TextField id="billStreet2" label="Street 2" variant="standard" />
                                <TextField id="billStreet3" label="Street 3" variant="standard" />
                                <TextField id="billCity" label="City" variant="standard" />
                                <TextField id="billState" label="State/Province" variant="standard" />
                                <TextField id="billPostalCode" label="Zip/Postal Code" variant="standard" />
                                <TextField id="billCountry" label="Country/Region" variant="standard" />
                                <TextField id="billPhone" label="Phone" variant="standard" />
                                <TextField id="billFax" label="Fax" variant="standard" />
                                <TextField id="accountContact" label="Account Contact" variant="standard" />
                            </div>
                        </div>
                        <div>
                            <div className='heading-div'>Ship To Address</div>
                            <div className='input-container'>
                                <TextField id="shipName" label="Name" variant="standard" />
                                <TextField id="shipStreet1" label="Street 1" variant="standard" />
                                <TextField id="shipStreet2" label="Street 2" variant="standard" />
                                <TextField id="shipStreet3" label="Street 3" variant="standard" />
                                <TextField id="shipCity" label="City" variant="standard" />
                                <TextField id="shipState" label="State/Province" variant="standard" />
                                <TextField id="shipPostalCode" label="Zip/Postal Code" variant="standard" />
                                <TextField id="shipCountry" label="Country/Region" variant="standard" />
                                <TextField id="shipPhone" label="Phone" variant="standard" />
                                <TextField id="shipFax" label="Fax" variant="standard" />
                                <TextField id="shippingContact" label="Shipping Contact" variant="standard" />
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <Button variant="contained">Next</Button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CustomerInformation;