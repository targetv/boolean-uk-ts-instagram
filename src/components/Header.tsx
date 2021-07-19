import React from "react";

import UserCard from "./UserCard";



import { UsersProps } from "../App";


function Header({ users,  setCurrentUser, currentUser }: UsersProps){
    return (
        <header className="main-header">
            <div className="wrapper">

        {users.map(user=> <UserCard user={user} setCurrentUser={setCurrentUser} currentUser={currentUser}/>)}
  
  </div>
        </header>
    )
}

export default Header