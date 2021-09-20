import React, { useState } from 'react';

function UserMgmt() {
  
  const [user, setUser] = useState({fullname: '', mobile: ''});
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    let usr = {...user};
    usr[event.target.name] = event.target.value;
    setUser(usr);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, user]);
    setUser({fullname: '', mobile: ''});
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Add User</h4>
      <form onSubmit={handleSubmit} autoComplete="off">
        Name: <input name="fullname" onChange={handleInputChange} value={user.fullname} />
        Mobile: <input name="mobile" onChange={handleInputChange} value={user.mobile} />
        <button type="submit" className="btn_save_user">Add User</button>
      </form>
      <hr />
      <div style={{ width: '60%' }}>
        <table style={{ margin: '0 auto', width: '100%' }} className="usertable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {
              ( users && users.length > 0 )
              ?
              users.map((user, userIndex) =>
                <tr className="tbl_row_data" key={userIndex}>
                  <td>{userIndex+1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.mobile}</td>
                </tr>
              )
              :
              <tr><td colSpan="2" className="tbl_row_no_data">No user found</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserMgmt;
