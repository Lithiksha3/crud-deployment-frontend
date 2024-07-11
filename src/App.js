
import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import Nav from './components/Nav';
import EditEvent from './components/EditEvent';
import Signin from './components/Signin';
import Signup from "./components/Signup";
import UserList from "./components/UserList";
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <div className="container-fluid">
                <HashRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/create-event" element={
                            <ProtectedRoute>
                                <CreateEvent />
                            </ProtectedRoute>
                        } />
                        <Route path="/event-list" element={
                            <ProtectedRoute>
                                <EventList />
                            </ProtectedRoute>
                        } />
                        <Route path="/edit-event/:id" element={
                            <ProtectedRoute>
                                <EditEvent />
                            </ProtectedRoute>
                        } />
                        <Route path="/user-list" element={ 
                            <ProtectedRoute>
                                <UserList />
                            </ProtectedRoute>
                        } />
                        <Route path="/create-user" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </HashRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
