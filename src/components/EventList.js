
import { useEffect, useState } from "react";
import EventListRow from "./EventListRow";
import Axios from "axios";

export default function EventList() {
    const [arr, setArr] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-3opd.onrender.com/eventRoute/")
        .then((res) => {
            if (res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err) => alert(err))
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredEvents = arr.filter(event =>
        event.name && event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ListItems = () => {
        return filteredEvents.map((val, index) => {
            return <EventListRow key={index} obj={val} />
        });
    };

    return (
        <div style={{ maxWidth: "80%", margin: "50px auto", fontFamily: "Nosifer" }}>
            <input
                type="text"
                placeholder="Search by event name"
                value={searchQuery}
                onChange={handleSearch}
                style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
            />
            <table className="table table-bordered table-light table-striped">
                <thead className="thead-dark fs-3">
                    <tr>
                        <th className="text-center bg-dark text-light">Type</th>
                        <th className="text-center bg-dark-subtle">Name</th>
                        <th className="text-center bg-dark text-light">Description</th>
                        <th className="text-center bg-dark-subtle">Event Date</th>
                        <th className="text-center bg-dark text-light">Tickets Available</th>
                        <th className="text-center bg-dark-subtle">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {ListItems()}
                </tbody>
            </table>
        </div>
    );
}
