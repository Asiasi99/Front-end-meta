import React, { useState } from 'react';

const Bookingform = (props) => {
    const [date, setdate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setdate(e);
        props.dispatch(e);
    }
    return (

        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">
                                Choose Date
                            </label>
                            <input id="book=date" value={date} onChange={(e) => handleChange(e.target.value)} Type="date" required>
                            </input>
                        </div>

                        <div>
                            <label htmlFor="book-time">
                                Choose Time
                            </label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}> {availableTimes}</option> })
                                }
                            </select>

                        </div>
                        <div>

                            <label htmlFor='book-guests'> Number of Guests: </label>
                            <input id='book-guests'min='1' value={guests} onChange={(e) => setGuests(e.target.value)}> </input>

                        </div>

                        <div>
                            
                            <label htmlFor='book-occation'> Occasion: </label>
                            <select id='book-occation' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        
                        </div>

                        <div>

                            <input aria-label='On Click' type='submit' value={"Make your reservation"}></input>
                        </div>

                    </fieldset> 




                </form>
            </section>
        </header>

    )
}

export default Bookingform;