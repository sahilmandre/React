import React, { useState, useEffect} from "react";
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';

const EditUser = () => {
    let history = useHistory()
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const { name, email, username, phone, website } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/users/${id}`, user)
        history.push("/")
    }
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/users/${id}`)
    setUser(result.data)
  }

    return (
        <div className="container mt-4">
            <h1>Edit User</h1>

            <form className="row g-3 container" onSubmit={e => onSubmit(e)}>
                <div className="col-md-6">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                        Contact
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="website" className="form-label">
                        Website
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-block btn-warning col-6">
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditUser
