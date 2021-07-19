import React from "react"

import FeedCard from "./FeedCard"

import { MainPropsForFeed } from "./Main"



function FeedSection({users, posts}: MainPropsForFeed){
    return (
        <section className="feed">
  <ul className="stack">
      {posts.map(post => <FeedCard post={post} users={users}/> )}
    {/* <!-- More <li className="post"> --> */}
  </ul>
</section>

    )
}

export default FeedSection