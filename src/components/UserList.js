import { useEffect, useState } from "react";
import UserListRow from "./UserListRow";
import Axios from "axios";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-3opd.onrender.com/userRoute/")
            .then((res) => {
                if (res.status === 200)
                    setUsers(res.data);
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ListItems = () => {
        return filteredUsers.map((user, index) => {
            return <UserListRow key={index} obj={user} />;
        });
    };

    return (
        <div style={{ maxWidth: "80%", margin: "50px auto", fontFamily: "Nosifer" }}>
            <input
                type="text"
                placeholder="Search by user name"
                value={searchQuery}
                onChange={handleSearch}
                style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
            />
            <table className="table table-bordered table-light table-striped">
                <thead className="thead-dark fs-3">
                    <tr>
                        <th className="text-center bg-dark text-light">Name</th>
                        <th className="text-center bg-dark-subtle">Password</th>
                        <th className="text-center bg-dark text-light">Role</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {ListItems()}
                </tbody>
            </table>
        </div>
    );
}
