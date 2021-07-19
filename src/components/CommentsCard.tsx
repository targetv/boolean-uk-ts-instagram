import React from "react"

type CommentType = {
    id: number;
    content: string;
    userId: number;
    postId: number;
}

type CommentCardProps = {
    comment: CommentType,
    findPostUser: () => {}
}


function CommentsCard({comment, findPostUser}: CommentCardProps){

    let commentUser = findPostUser(comment.userId)
    
    return (
        <div className="post--comment">
        <div className="avatar-small">
          <img
            src={commentUser.avatar}
            alt={commentUser.username}
          />
        </div>
        <p>{comment.content}</p>
      </div>
    )
}

export default CommentsCard