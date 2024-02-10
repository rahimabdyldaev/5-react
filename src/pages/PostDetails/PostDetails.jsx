import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./PostDetails.module.css";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const onBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  console.log(params);
  return (
    <div className={classes.post}>
      {post && (
        <>
          <button onClick={onBack}>Back</button>
          <div className="header">
          <h1>{post.id} </h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;