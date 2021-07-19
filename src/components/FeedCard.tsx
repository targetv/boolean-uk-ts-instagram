import React from "react"

import {CommentsProps, UserStateItem} from "../App"
import CommentsCard from "../components/CommentsCard"


type FeedCardComponent = {
    comments : CommentsProps[],
    content: string,
    id: number,
    image: {src: string, alt: string},
    likes: number,
    title: string,
    userId: number
  }

type FeedCardProp = {
    post : FeedCardComponent,
    users: UserStateItem
}

type User = {
        id: number;
        username: string;
        avatar: string;
    }


function FeedCard({post, users}: FeedCardProp){
    
    function findPostUser(userIdTOFind: number){
        let postUserName = {}
        users.map(user => {
            if( user.id === userIdTOFind) {
                return postUserName = user
            }
            else{
                return user
            }
        })
        return postUserName
    }

    let currentPostUser : User | {} = findPostUser(post.userId) 


    return (
        <li className="post">
        <div className="chip active">
          <div className="avatar-small">
            <img
              src={currentPostUser.avatar}
              alt={currentPostUser.username}
            />
          </div>
          <span>{currentPostUser.username}</span>
        </div>
        <div className="post--image">
          <img
            src={post.image.src}
            alt={post.image.alt}
          />
        </div>
        <div className="post--content">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
        <div className="post--comments">
          <h3>Comments</h3>
          {post.comments.map(comment =>  <CommentsCard comment={comment} findPostUser={findPostUser}/>)}
         
       
          <form id="create-comment-form" autoComplete="off">
            <label htmlFor="comment">Add comment</label>
            <input id="comment" name="comment" type="text" />
            <button type="submit">Comment</button>
          </form>
        </div>
      </li>

    )
}

export default FeedCard