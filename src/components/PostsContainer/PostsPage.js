//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import { useState } from "react";
import "../../dummy-data.js";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData);
  console.log(posts);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map(postObj => {
        return <Post key={postObj.username} post={postObj}/>
      })}
    </div>
  );
};

export default PostsPage;
