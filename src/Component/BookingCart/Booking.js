import React, { useContext, useEffect } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import './Booking.css'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Booking = (props) => {
    const [detectPlace,setDetectPlace] = useContext(UserContext);
    const setPlace = (name) => {
        setDetectPlace(name)
    }
    setDetectPlace(props.name);
    useEffect ( ()=>{
        setDetectPlace(props.name); 
        console.log(detectPlace);
    },[]);
    
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [selectedDate1, setSelectedDate1] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };

    return (
        <div className="BookingCart">
            <Grid className="BookingBody" >
                <div>
                    <p>Orijin</p>
                    <input type="text" />
                </div>
                
                <div>
                    <p>Destination</p>
                    <input type="text" value={props.name} />
                </div>
               
                <div className="datePicker">

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <Grid container justify="space-around">
                        <KeyboardDatePicker
                            className="myDatePicker"
                            margin="normal"
                            id="date-picker-dialog"
                            label="Form"
                            format="MM/dd"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                        className="myDatePicker"
                            margin="normal"
                            id="date-picker-dialog"
                            label="To"
                            format="MM/dd"
                            value={selectedDate1}
                            onChange={handleDateChange1}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                        </Grid>
                    </MuiPickersUtilsProvider>

                </div>
               
                <button className="BookingBtn" > <Link to="/hotel">Start Booking</Link></button>
            </Grid>

        </div>
    );
};

export default Booking;