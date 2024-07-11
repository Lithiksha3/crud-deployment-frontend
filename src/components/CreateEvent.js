import { useState } from "react";
import Axios from "axios";
import EventForm from "./EventForm";

export default function CreateEvent() {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name: arr[0], description: arr[1], ticketsAvailable: arr[2], eventDate: arr[3] };
        Axios.post("https://crud-deployment-backend-3opd.onrender.com/eventRoute/create-event", data)
        .then((res) => {
            if (res.status === 200)
                alert("Event Added SUCCESSFULLY!!");
            else
                Promise.reject();
        })
        .catch((err) => {
            alert(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <EventForm getState={getState} />
        </form>
    );
}
