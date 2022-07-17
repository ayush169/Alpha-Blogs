import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import Axios from "axios";

const Slug = (props) => {
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
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default Slug;
