import React, { useState } from 'react';
import '../Style/Summary.css';
import Button from '@mui/material/Button';

function Summary() {
    return (
        <div className="parent-container">
            <div className='container'>
                <div className='heading-div'>Profitability</div>
                <div className='summary-container'>
                    <div>
                        <div className="profit-div">
                            <div className='profit-label'>Total Price</div>
                            <div>$0.00</div>
                        </div>
                        <div className="profit-div">
                            <div className='profit-label'>ATG Discount</div>
                            <div>$0.00</div>
                        </div>
                        <div className="profit-div">
                            <div className='profit-label'>Total Tax</div>
                            <div>$0.00</div>
                        </div>
                    </div>
                    <div>
                        <div className="profit-div">
                            <div className='profit-label'>Total Amount</div>
                            <div>$0.00</div>
                        </div>
                        <div className="profit-div">
                            <div className='profit-label'>Total Cost</div>
                            <div>$0.00</div>
                        </div>
                        <div className="profit-div">
                            <div className='profit-label'>Profit</div>
                            <div>$0.00</div>
                        </div>
                        <div className="profit-div">
                            <div className='profit-label'>Shipping</div>
                            <div>$0.00</div>
                        </div>
                    </div>


                </div>
                <div className="button-container">
                    <Button variant="contained">Back</Button>
                    <Button variant="contained">Update</Button>
                </div>
            </div>
        </div>
    );
}

export default Summary;