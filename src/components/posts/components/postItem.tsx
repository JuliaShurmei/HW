import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavorite,
  removeFromFavorites,
} from "../../../redux/reducers/favoriteReducer";
import { removePostItem } from "../../../redux/reducers/postReducer";

import { AppDispatch } from "../../../redux/store";
import { PostType } from "../posts";

interface PostItemProps {
  info: PostType;
  type: "main" | "favorite";
}

const PostItem: FC<PostItemProps> = ({ info, type }) => {
  const dispatch = useDispatch<AppDispatch>();

  const deletePost = () => {
    dispatch(removePostItem(info.id));
    console.log("DELETE THIS ITEM", info.id);
  };

  const likePost = () => {
    dispatch(addToFavorite(info));
  };
  const dislikePost = () => {
    console.log("");
    dispatch(removeFromFavorites(info.id));
  };

  return (
    <>
      <Link to={`/posts/${info.id}`}>
        <div style={{ border: "1px solid black", marginTop: 10, padding: 15 }}>
          <p>ID: {info.id}</p>
          <p>TITLE: {info.title}</p>
        </div>
      </Link>
      {type === "main" && (
        <>
          <button onClick={deletePost}>Delete this item</button>
          <button onClick={likePost}>LIKE</button>
        </>
      )}
      {type === "favorite" && <button onClick={dislikePost}>DISLIKE</button>}
    </>
  );
};

export default PostItem;
