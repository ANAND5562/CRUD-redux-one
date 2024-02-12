import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../slice/UserReducer'


function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const users = useSelector((state) => state.users)
    // console.log(">>>>>>>>>", users);
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (values) => {
        // console.log("Form data ::", values);
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }

    return (
        <>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Link to={"/"}>
                            <button className='btn btn-warning'>Bank to home</button>
                        </Link>
                        <h2 className="mb-4">Create User</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-warning">Create</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Create