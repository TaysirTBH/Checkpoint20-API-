import React from 'react'

function UserCard({user}) {
    return (
          <div className="card" style={{"width": "20rem" , "marginTop" : "4rem" ,"marginLeft":"4rem"}}>
            <div className = "top" ></div>
            <div className="card-body" style={{'color':"rgb(3, 3, 53)"}}>
              <h3 className="card-title">{user.name}</h3>
               <p> <span style={{'color':"#770737", 'fontSize':19, "fontWeight":'250px'}}> Username: </span> {user.username}</p> 
            </div>
           <ul className="list-group list-group-flush">
            <li className="list-group-item"> 
              <h5> Address </h5>
              <p className="card-text"> 
                {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode}.
              </p> 
            </li>
            <li className="list-group-item"> 
              <h5> Company </h5>
              <p className="card-text"> 
                {user.company.name} <br/>
                {user.company.catchPhrase} <br/>
                {user.company.bs}
              </p>  
            </li>
            <li className="list-group-item">
              <h5> Website </h5>
              <p className="card-text"> 
                {user.website}
              </p>
            </li>
          </ul>
          <div className="card-body">
          <span ><i className="fa fa-envelope" aria-hidden="true" style={{'color':"#A95C68"}}> </i> {user.email}</span> 
            <br/>
            <span ><i className="fa fa-phone" aria-hidden="true" style={{'color': "#A95C68"}}></i>  {user.phone}</span>  
          </div>
        </div>
    )
}

export default UserCard
