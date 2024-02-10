import { React, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import fetchAllPosts from "../../store/thunk/PostThunk";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(posts);
  const getShortValue = (text, postId) => {
    if (text.length > 20) {
      return (
        <>
          {text.slice(0, 20)}...
          <Link to={`/post/${postId}`} state={{ from: location.pathname }}>
            More
          </Link>
        </>
      );
    }
    return text;
  };

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, []);

  return (
    <div className={classes.container}>
      {posts.length !== 0 &&
        posts?.map((post) => {
          const onMoreClick = () => navigate(`/post/${post.id}`);
          return (
            <div className={classes.posts} key={`post-${post.id}`}>
              <div className={classes.post}>
                <h1>{post.id}</h1>
                <h2>{post.title}</h2>
                <p>{getShortValue(post.body, post.id)}</p>
              </div>
              <button onClick={onMoreClick}>Details</button>
            </div>
          );
        })}
    </div>
  );
};

export default Post;