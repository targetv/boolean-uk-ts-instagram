import React from "react";



type CurrentUserPropsList = {
    user: UserProp
    currentUser: string,
    setCurrentUser: () => {}
}

type UserProp = {
    id: number,
    avatar: string,
    username: string
}

function UserCard({user, currentUser, setCurrentUser}: CurrentUserPropsList){
 
    return (
      <a onClick={() => setCurrentUser(user.username)}>
         <div className={user.username === currentUser ? "chip active" : "chip"}>
         
      <div className="avatar-small">
        <img
          src={user.avatar}
          alt={user.username}
        />
      </div>
      <span>{user.username}</span>
    </div>
    </a>
    )
}

export default UserCard