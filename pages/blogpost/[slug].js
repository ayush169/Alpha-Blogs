import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import Axios from "axios";

const Slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    Axios.get(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((response) => {
        setBlog(response.data);
        console.log(response);
      })
      .catch(() => {
        console.log("could not get data");
      });
  }, [router.isReady]);

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

export default Slug;
