import React from "react";
import Blogs from "./Blogs";
import useGetArticles from "../../services/articles/useGetArticles";

function BlogsList() {
  const {data} = useGetArticles();
  const blogList = data?.data?.data || []

    
  return (
    <section className="layout-pt-lg layout-pb-md blogListView">
      <div className="container">
        {/* <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">
                Get inspiration for your next trip
              </h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                Interdum et malesuada fames
              </p>
            </div>
          </div>
        </div> */}
        <div className="row y-gap-30 pt-40">
          {/* <Blog4 /> */}
          <Blogs blogList={blogList}/>
        </div>
      </div>
    </section>
  );
}

export default BlogsList;
