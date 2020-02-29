import React from "react";

const CardPost = ({ post, handleLikes }) => {
  return (
    <article className="post">
      <div className="post-user">
        <img src={post.userImage} alt={post.username} />
        <p>{post.username}</p>
      </div>
      <div className="post-content">
        <div className={post.filter}>
          <img className="img" src={post.postImage} alt="" />
        </div>
        <div className="post-info">
          <div className="post-likes">
            <button onClick={() => handleLikes(post)}>
              <span>
                <img
                  src="/img/heart.svg"
                  className ={post.hasBeenLiked ? "liked" : "not-liked"
                  }
                  alt="hear"
                ></img>
              </span>
            </button>
            <p>{post.likes}</p>
          </div>
          <p>{post.caption}</p>
        </div>
      </div>
    </article>
  );
};

export default CardPost