import React from "react";

import CreatePostSection from "./CreatePostSection";
import FeedSection from "./FeedSection";

import { PostsProps, UserStateItem } from "../App";

export type MainPropsForFeed =  {
    users: UserStateItem, 
    posts: PostsProps,
    setPosts: () => {},
    currentUser: string,

}

function Main({users, posts, setPosts, currentUser} : MainPropsForFeed){
    return(
        <main className="wrapper">
            <section className="create-post-section">
    <CreatePostSection posts={posts} setPosts={setPosts} currentUser={currentUser} users={users}/>
  </section>
  <section className="feed">
   <FeedSection users={users} posts={posts}/>
  </section>
        </main>

    )
}

export default Main