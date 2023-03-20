import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PostType } from "../posts";

interface PostItemProps {
  info: PostType;
}

const PostItem: FC<PostItemProps> = ({ info }) => {
  return (
    <Link to={`/posts/${info.id}`}>
      <div style={{ border: "1px solid black", marginTop: 10, padding: 15 }}>
        <p>ID: {info.id}</p>
        <p>TITLE: {info.title}</p>
      </div>
    </Link>
  );
};

export default PostItem;