import { useState } from 'react';
import TicketLogo from '../assets/tickets-for-the-show-svgrepo-com.svg';
import Description from '../assets/notes-svgrepo-com.svg';
import EventName from '../assets/calendar-event-activity-svgrepo-com.svg';
import EventDateLogo from '../assets/calendar-svgrepo-com.svg';

export default function EventForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [description, setDescription] = useState(props.descriptionValue);
    const [ticketsAvailable, setTicketsAvailable] = useState(props.ticketsAvailableValue);
    const [eventDate, setEventDate] = useState(props.eventDateValue);

    const arr = [name, description, ticketsAvailable, eventDate];

    const handleClick = () => {
        props.getState(arr);
    };

    return (
        <div className="container mt-4 fs-4" style={{ maxWidth: "40%" }}>
            <div className="mb-3">
                <img src={EventName} alt='event' className='logo' />
                <label htmlFor="eventName" className="form-label fw-bold">Event Name</label>
                <input
                    defaultValue={props.nameValue}
                    type="text"
                    id="eventName"
                    className="form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter Event Name"
                />
            </div>
            <div className="mb-3">
                <img src={Description} alt='description' className='logo' />
                <label htmlFor="eventDescription" className="form-label fw-bold">Event Description</label>
                <textarea
                    defaultValue={props.descriptionValue}
                    id="eventDescription"
                    className="form-control"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter Description of Event"
                />
            </div>
            <div className="mb-3">
                <img src={TicketLogo} alt='ticket' className='logo' />
                <label htmlFor="ticketsAvailable" className="form-label fw-bold">Tickets Available</label>
                <input
                    defaultValue={props.ticketsAvailableValue}
                    type="number"
                    id="ticketsAvailable"
                    className="form-control"
                    value={ticketsAvailable}
                    onChange={(event) => setTicketsAvailable(event.target.value)}
                    placeholder="Enter Number of Tickets Available"
                />
            </div>
            <div className="mb-3">
                <img src={EventDateLogo} alt='event date' className='logo' />
                <label htmlFor="eventDate" className="form-label fw-bold">Event Date</label>
                <input
                    defaultValue={props.eventDateValue}
                    type="date"
                    id="eventDate"
                    className="form-control"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                />
            </div>
            <button onClick={handleClick} type="submit" className="btn btn-success d-block mx-auto my-3 fs-4">
                Submit
            </button>
        </div>
    );
}
