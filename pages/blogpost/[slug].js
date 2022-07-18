import React, { useEffect, useState } from "react";
import fs from "fs";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import Axios from "axios";

const Slug = (props) => {
  function createMarkup(html) {
    return { __html: html };
  }

  const [blog, setBlog] = useState(props.myBlog);
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   Axios.get(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((response) => {
  //       setBlog(response.data);
  //       console.log(response);
  //     })
  //     .catch(() => {
  //       console.log("could not get data");
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`./blogdata/${slug}.json`, "utf8");
  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
