import Bookingform from "./Bookingform";

function Booking(props) {
    return (
       <Bookingform availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}
export default Booking;