import React from "react";
import Blogs from "./Blogs";
import useGetArticles, {
  useGetArticlesInfinite,
} from "../../services/articles/useGetArticles";
import getFlatData from "../../utils/getFlatData";
import { useReloadOnPageScroll } from "../../hooks/useReloadOnPageScroll";
import { useInView } from "react-intersection-observer";
import { FaSpinner } from "react-icons/fa";

function BlogsList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetArticlesInfinite({});
  const blogs = getFlatData(data);
  const blogList = blogs || [];

  const [ref, inView] = useInView()

  useReloadOnPageScroll({
    fetchNextPage,
    hasNextPage,
    inView,
    isFetchingNextPage
  })

  if(isLoading) {
    return <></>
  }

  return (
    <section className="layout-pt-lg layout-pb-md blogListView">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">
                Trucks News - All Latest Trucks Information and Auto news
              </h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                Read more from us
              </p>
            </div>
          </div>
        </div>
        <div className="row y-gap-30 pt-40">
          {/* <Blog4 /> */}
          <Blogs blogList={blogList} />
          <div ref={ref}></div>
        </div>
      </div>
    </section>
  );
}

export default BlogsList;
