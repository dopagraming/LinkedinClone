import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import ImageIcon from "@mui/icons-material/Image";
import MessageIcon from "@mui/icons-material/Message";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { postArticleAPI } from "../redux/actions/index";
import { Timestamp } from "firebase/firestore";
const MakePost = ({ handleOpen, open }) => {
  const user = useSelector((state) => state.userState.user);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [assetArea, setAssetArea] = useState("");
  const [textarea, setTextarea] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [url, setUrl] = useState("");
  const handleDisabledButton = (vlaue) => {
    if (vlaue.trim().length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  const handleChange = (e) => {
    console.log(e.target.files);
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
    } else {
      setImageSrc(image);
      setIsButtonDisabled(false);
    }
  };
  const handlePostArticles = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: imageSrc,
      url: url,
      user: user,
      content: textarea,
      timestamp: Timestamp.now(),
    };
    postArticleAPI(payload);
    reset();
  };
  const reset = () => {
    setTextarea("");
    setImageSrc("");
    setUrl("");
    setAssetArea("");
    handleOpen();
    setIsButtonDisabled(true);
  };
  return (
    <div
      className={
        open === true
          ? "bg-[#1e1d1dad] fixed left-0 top-0 w-full h-full animate-[fadenIn_.3s] "
          : "hidden"
      }
    >
      <div className="h-full absolute z-50 left-[50%] translate-x-[-50%]  py-4 rounded-sm bg-white w-[60%]">
        <div className="px-2 pb-4 border-b border-b-slate-700 flex justify-between items-center">
          <p>Create Post</p>
          <CloseIcon className="cursor-pointer" onClick={() => reset()} />
        </div>
        <div className="flex px-4 mt-4 items-center">
          <img
            width={45}
            src={user && user?.photoURL ? user.photoURL : ""}
            alt="profile-img"
            className="me-2 rounded-full"
          />
          <p> {user && user.displayName ? user.displayName : "Uknown"}</p>
        </div>
        <div className="ps-4 mt-4 w-full h-auto">
          <textarea
            className="bg-inherit outline-none focus:border-none w-full resize-none"
            type="text"
            autoFocus={true}
            placeholder="What Do You Want To Talk About ?"
            rows="4"
            value={textarea}
            onChange={(e) => {
              const vlaue = e.target.value;
              setTextarea(vlaue);
              handleDisabledButton(vlaue);
            }}
          />
          {assetArea === "image" ? (
            <>
              <input
                type="file"
                placeholder=""
                onChange={handleChange}
                value=""
              />
              {imageSrc && (
                <img
                  width={250}
                  className="m-auto"
                  src={URL.createObjectURL(imageSrc)}
                  alt="img"
                />
              )}
            </>
          ) : (
            assetArea === "url" && (
              <>
                <input
                  type="url"
                  required
                  placeholder="https://example.com"
                  className="outline-none w-full"
                  vlaue=""
                  onChange={(e) => {
                    const value = e.target.value;
                    setUrl(value);
                    handleDisabledButton(value);
                  }}
                />
                <div className="max-h-[150px]">
                  {url && <ReactPlayer width="100%" height="10%" url={url} />}
                </div>
              </>
            )
          )}
        </div>
        <div className="flex justify-between items-center px-4 mt-4">
          <div className="flex text-xl me-3 pe-3 border-e border-e">
            <ImageIcon
              className="me-3 cursor-pointer"
              onClick={() => setAssetArea("image")}
            />
            <VideoFileIcon
              className=" cursor-pointer"
              onClick={() => setAssetArea("url")}
            />
          </div>
          <div className="flex items-center me-auto">
            <MessageIcon className="me-1" />
            <span>Anyone</span>
          </div>
          <button
            disabled={isButtonDisabled}
            className="text-xs font-medium disabled:text-blue-900 disabled:border disabled:border-blue-900 disabled:bg-inherit text-white bg-blue-700 rounded-full p-2"
            onClick={(e) => {
              handlePostArticles(e);
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePost;
