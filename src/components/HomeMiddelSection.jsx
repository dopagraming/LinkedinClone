import SharePost from "./SharePost";
import Post from "./Post";
import MakePost from "./MakePost";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const HomeMiddelSection = () => {
  const articles = useSelector((state) => state.articleState.articles);
  const loading = useSelector((state) => state.articleState.loading);
  return (
    <div className="max-md:col-span-12 md:col-span-9 min-[991px]:col-span-6 xl:col-span-7 relative">
      <SharePost />
      {loading && (
        <img width={70} src="./images/loader.svg" className="m-auto" />
      )}
      {articles.length > 0 ? (
        articles.map((article, index) => <Post article={article} key={index} />)
      ) : (
        <p>There Is No Posts</p>
      )}
      <MakePost />
    </div>
  );
};

export default HomeMiddelSection;
