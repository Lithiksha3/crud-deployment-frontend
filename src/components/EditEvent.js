

import Axios from "axios";
import EventForm from "./EventForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditEvent() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", description: "", ticketsAvailable: "", eventDate: "" });
    const [loading, setLoading] = useState(true);
    const[newData,setNewData]= useState([]);
    useEffect(() => {
        Axios.get("https://crud-deployment-backend-3opd.onrender.com/eventRoute/update-event/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, description, ticketsAvailable, eventDate } = res.data;
                    setInitialValue({ name, description, ticketsAvailable, eventDate: new Date(eventDate).toISOString().split('T')[0] });
                    setLoading(false);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, [id]);
    const getState = (childData) => {
        setNewData(childData);
    }
    if (loading) {
        return <div>Loading...</div>;
    }
const handleSubmit=() =>{
    const data={name:newData[0],description:newData[1],ticketsAvailable:newData[2],eventDate:newData[3]};
    Axios.put("https://crud-deployment-backend-3opd.onrender.com/eventRoute/update-Event/"+id,data)
    .then((res)=>{
        if(res.status === 200)
        alert("Record updated successfully")
        else
        Promise.reject();
    })
    .catch((err)=>alert(err));
}
    return (
        <form onSubmit={handleSubmit} >
            <EventForm getState={getState}
                nameValue={initialValue.name}
                descriptionValue={initialValue.description}
                ticketsAvailableValue={initialValue.ticketsAvailable}
                eventDateValue={initialValue.eventDate}
            />
        </form>
    );
}

export default EditEvent;
