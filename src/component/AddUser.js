import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';
const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    city: ''
};
const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone, city } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/');
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h4 className="mb-4">Add User</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                        name="name" value={name} onChange={onValueChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="formlabel">Username</label>
                    <input type="text" className="form-control" id="username"
                        name="username" value={username} onChange={onValueChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"
                        name="email" value={email} onChange={onValueChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone"
                        name="phone" value={phone} onChange={onValueChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city"
                        value={city} onChange={onValueChange} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={addUserDetails}>Add User</button>
            </form>
        </div>
    );
};
export default AddUser;