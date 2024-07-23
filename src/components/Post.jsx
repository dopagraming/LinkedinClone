import CommentIcon from "@mui/icons-material/Comment";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Comments } from "../appInformations";
import CheckIcon from "@mui/icons-material/Check";
const Post = ({ article, index }) => {
  const [liked, setLiked] = useState(false);
  const [like, setlike] = useState(index);
  const [comment, setComment] = useState(false);
  const [commetContet, setCommentContet] = useState("");
  const [follow, setFollow] = useState(false);
  const [comments, setComments] = useState([]);
  const handleLiked = () => {
    let likestatus = !liked;
    setLiked(!liked);
    if (likestatus) {
      setlike(like + 1);
    } else {
      setlike(like - 1);
    }
  };
  const showComments = () => {
    setComment(!comment);
  };
  const addComment = () => {
    const commentInfo = {
      userName: article.actor.userName,
      userImg: article.actor.userImg,
      dis: commetContet,
    };
    setComments([...comments, commentInfo]);
    setCommentContet("");
  };
  return (
    <div
      className="bg-white p-2 mt-2 rounded-md"
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
    >
      <div className="flex justify-between items-center mb-2">
        <img
          width={55}
          src={
            article && article.actor.userImg
              ? article.actor.userImg
              : "./images/MyPhoto.jpg"
          }
          alt=""
          className="rounded-full me-2 cursor-pointer"
        />
        <div className="me-auto">
          <h4 className="font-medium cursor-pointer">
            {article.actor.userName}
          </h4>
          <p className="text-sm">13k+ followers | Senior Fornt End Developer</p>
          <div className="text-sm">
            <span className="me-2">
              {article.actor.date.toDate().toLocaleString()}
            </span>
            <PublicIcon />
          </div>
        </div>
        <button
          onClick={() => setFollow(!follow)}
          className="flex items-center text-blue-700 cursor-pointer transition hover:text-blue-900"
        >
          {follow ? (
            <>
              <CheckIcon />
              <span className="max-sm:hidden">Following</span>
            </>
          ) : (
            <>
              <AddIcon className="" />
              <span className="max-sm:hidden">Follow</span>
            </>
          )}
        </button>
      </div>
      <p className="ps-3 mb-2 ">{article.content}</p>
      {article.image && <img src={article.image} />}
      {article.link && <ReactPlayer width="100%" url={article.link} />}
      <div className="flex justify-between px-3 mt-1 pb-1  border-b border-b-gray-300">
        <div className={liked ? "text-sm text-red-500 " : "text-sm"}>
          <span>{like === 0 ? "" : like}</span>
          <FavoriteBorderIcon className="ms-1" />
        </div>
        <div className="text-sm">
          {article.comment === 0 ? "" : article.comment} 40 Comment
        </div>
      </div>
      <div className="flex text-xs text-gray-500 justify-around mt-2">
        <div
          className={
            liked
              ? "cursor-pointer flex items-center bg-gray-100 p-3 text-blue-500 rounded-md"
              : "cursor-pointer flex items-center transition hover:bg-gray-100 p-3 hover:text-gray-900 rounded-md"
          }
          onClick={handleLiked}
        >
          <ThumbUpIcon className="me-1" />
          <span className="max-sm:hidden">Like</span>
        </div>
        <div
          className={
            comment
              ? "cursor-pointer flex items-center bg-gray-100 max-sm:p-1 p-3 text-gray-900 rounded-md"
              : "cursor-pointer flex items-center transition hover:bg-gray-100 max-sm:p-1 p-3 hover:text-gray-900 rounded-md"
          }
          onClick={showComments}
        >
          <CommentIcon className="me-1" />
          <span className="max-sm:hidden">Comment</span>
        </div>
        <div className="cursor-pointer flex items-center transition hover:bg-gray-100 max-sm:p-1 p-3 hover:text-gray-900 rounded-md">
          <ShareIcon className="me-1" />
          <span className="max-sm:hidden">Share</span>
        </div>
        <div className="cursor-pointer flex items-center transition hover:bg-gray-100 max-sm:p-1 p-3 hover:text-gray-900 rounded-md">
          <BookmarkIcon className="me-1 text-xs" />
          <span className="max-sm:hidden">Save</span>
        </div>
      </div>
      {comment && (
        <div>
          <div className="flex items-center animate-[fadenIn_.5s]">
            <img
              src={article.actor.userImg}
              alt="userImg"
              className="rounded-full w-[45px] h-[45px] object-cover me-2"
            />
            <input
              type="text"
              className="realtive border border-text-gray-700 rounded-full w-full outline-none p-1 ps-3"
              placeholder="add a Comment"
              onChange={(e) => setCommentContet(e.target.value)}
              value={commetContet}
            />
            {commetContet.trim().length > 0 && (
              <button
                onClick={addComment}
                className="absolute right-[15px] text-white font-medium bg-blue-500 rounded-full py-1 px-2 text-xs cursor-pointer transition hover:bg-blue-700"
              >
                post
              </button>
            )}
          </div>
          {comments?.map((c) => (
            <div className="ps-3 flex mt-4">
              <img
                src={c.userImg}
                alt="userImg"
                className="rounded-full w-[35px] h-[35px] object-cover me-2"
              />
              <div className="bg-gray-100 w-full rounded-sm p-2 ">
                <p className="font-medium transition hover:text-blue-500 cursor-pointer">
                  {c.userName}
                </p>
                <p className="text-xs text-gray-500 my-1">
                  Senior Fornt End Developer
                </p>
                <p className="mt-2">{c.dis}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
