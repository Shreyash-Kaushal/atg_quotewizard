import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Notes() {
    return (
        <div className="parent-container">
            <div className='container'>
                <div className='heading-div'>External Notes</div>
                <div className='container'>
                    <div className='input-container'>
                        <TextField
                            id="standard-multiline-flexible"
                            label="External Notes (Notes that will appear on the quote)"
                            InputProps={{
                                rows: 6,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-flexible"
                            label="Internal Notes(Does not Appear on Quote)"
                            InputProps={{
                                rows: 6,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />


                        <TextField
                            id="standard-multiline-flexible"
                            label="Invoice Notes (Information that shows on the invoice)"
                            InputProps={{
                                rows: 6,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                    </div>
                </div>
                <div className="button-container">
                    <Button variant="contained">Back</Button>
                    <Button variant="contained">Next</Button>
                </div>

            </div>
        </div>
    );
}

export default Notes;