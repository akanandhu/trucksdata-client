import React, { useEffect, useState } from "react";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultFooter from "../../../components/footer/default";
import RelatedBlog from "../../../components/blog/blog-details/RelatedBlog";
import blogsData from "../../../data/blogs";
import { useRouter } from "next/router";
import DetailsContent from "../../../components/blog/blog-details/DetailsContent";
import Header1 from "../../../components/header/header-8";
import BlogNavigator from "../../../components/blog/blog-details/BlogNavigator";

const BlogSingleDynamic = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setBlogItem(blogsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Blog Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-12">
              <img
                src={blog?.img}
                alt={blog?.title}
                className="col-12 rounded-8 w-100 img_"
              />
            </div>
          </div>
          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
            <h1 className="text-30 fw-600">{blog?.title}</h1>
            <div className="text-15 text-light-1 mt-10">{blog?.date}</div>
            </div>
            
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent />
              <div className="mt-5">
              <BlogNavigator />

              </div>
              
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}

        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container ">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Related content</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore other related articles
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedBlog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
