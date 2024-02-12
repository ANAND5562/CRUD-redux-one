import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../slice/UserReducer';



function Update() {

  // useParams is a hook to select id from state!!
  const { id } = useParams();
  const users = useSelector((state) => state.users)

  // To filter existin user
  const existingUser = users.filter(e => e.id == id)
  const { name, email } = existingUser[0]

  const [uname, setUname] = useState(name)
  const [uemail, setUemail] = useState(email)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (value) => {
    // console.log("Updated data", value);
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail,
    }))
    navigate("/")
  }



  return (
    <>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Link to={"/"}>
              <button className='btn btn-warning'>Bank to home</button>
            </Link>
            <h2 className="mb-4">Update User</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={uname}
                  onChange={e => setUname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={uemail}
                  onChange={e => setUemail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-warning">Update</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Update