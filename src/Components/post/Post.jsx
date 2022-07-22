import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import {useState} from "react";
const Post = ({ post }) => {
  const [ like, setLike] = useState(post.like)
  const [ isLiked, setIsLiked] = useState(false)
  const likeHandler=()=>{
    setLike(isLiked ? like-1 :like+1)
    setIsLiked(! isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {/*? is for making sure if there is no description it would not give error */}
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" onClick={likeHandler} alt="" className="likeIcon" />
            <img src="/assets/heart.png" onClick={likeHandler} alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people react it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
