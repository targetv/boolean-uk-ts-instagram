import React from "react"

import {UserStateItem, PostsProps} from "../App"

type CreatePostSectionProps = {
  users: UserStateItem,
  posts: PostsProps,
  currentUser: string,
  setPosts: () => {}

}

function CreatePostSection({users, currentUser, setPosts, posts}: CreatePostSectionProps){

  const currentUserFindId =  users.find(user => user.username === currentUser)







  function formSubmit(e){
    e.preventDefault()

    const postFormData = e.target
    let newPost = {
    content: postFormData.content.value,
    id: posts.length + 1,
    comments: [],
    image: {
        src: postFormData.image.value,
        alt: postFormData.title.value 
    },
    likes: 0,
    title: postFormData.title.value,
    userId: currentUserFindId.id

    }

    console.log(newPost)

    fetch("http://localhost:4000/posts", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    }).then(resp => {
    if(resp.ok){
      setPosts([...posts, newPost])
    }
    else{
      console.warn("Did not work")
    }
    })

    e.target.reset()
  }





    return(
        <section className="create-post-section">
  <form id="create-post-form" autoComplete="off" onSubmit={formSubmit}>
    <h2>Create a post</h2>
    <label htmlFor="image">Image</label>
    <input id="image" name="image" type="text" />
    <label htmlFor="title">Title</label>
    <input id="title" name="title" type="text" />
    <label htmlFor="content">Content</label>
    <textarea id="content" name="content" rows="2" columns="30"></textarea>
    <div className="action-btns">
      <button id="preview-btn" type="button">Preview</button>
      <button type="submit">Post</button>
    </div>
  </form>
 
  {/* <div className="post">
  
  </div> */}

</section>
    )
}

export default  CreatePostSection