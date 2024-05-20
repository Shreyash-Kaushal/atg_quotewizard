import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import '../Style/Forecasting.css';
function Forecasting() {
    return (
        <div className="parent-container">
            <div className='container'>
                <div className='heading-div'>Forecasting</div>
                <div className='input-container'>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="dealsPer">Deals %</InputLabel>
                        <Select
                            labelId="dealsPer"
                            id="dealsPer"
                            label="Deals %"
                        >
                            <MenuItem value="">
                                <em>Exclude</em>
                            </MenuItem>
                            <MenuItem value={10}>Stage 3 - Solution Building</MenuItem>
                            <MenuItem value={20}>Stage 4 Upside</MenuItem>
                            <MenuItem value={30}>Stage 5 Commit</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='container'>


                    <div className='input-container'>
                        <TextField
                            id="standard-multiline-flexible"
                            label="When is the next step with the customer?"
                            InputProps={{
                                rows: 4,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-flexible"
                            label="What is the Compelling Event?"
                            InputProps={{
                                rows: 4,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />


                        <TextField
                            id="standard-multiline-flexible"
                            label="What is the Customer's Alternative Option?"
                            InputProps={{
                                rows: 4,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-flexible"
                            label="How is the customer going to pay?"
                            InputProps={{
                                rows: 4,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-flexible"
                            label="What is the Value/ROI to the Customer?"
                            InputProps={{
                                rows: 4,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-flexible"
                            label="What is the purchasing Process? Who has to approve?"
                            InputProps={{
                                rows: 4,
                                multiline: true,
                                inputComponent: 'textarea'
                            }}
                            variant="standard"
                        />
                        <div className='input-container'>
                            <DatePickerComponent id="customerPurchaseDate" placeholder="When is the customer going to purchase?" />
                            <DatePickerComponent id="quoteExpirationDate" placeholder="Quote Expiration Date" />
                        </div>
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

export default Forecasting;