import React, { useEffect, useState } from "react";
import fs from "fs";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import Axios from "axios";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlogs(parsed);
  //     });
  // }, []);

  // useEffect(() => {

  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.title} className={styles.blogItem}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogitem.content.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("./blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const file = data[i];
    myfile = await fs.promises.readFile(`./blogdata/${file}`, "utf8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
