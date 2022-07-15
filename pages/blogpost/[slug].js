import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          repudiandae nemo voluptate velit. Facere animi est nisi tenetur sed
          sit beatae, repellat voluptatem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eveniet iusto delectus doloremque
          praesentium modi! Corporis at, nostrum reprehenderit tenetur esse,
          suscipit deserunt aut officia repellat, voluptates est? Totam,
          doloribus porro. Vero esse labore dolores atque quidem excepturi
          cumque sunt consectetur dignissimos ea! Aliquam, cum delectus dicta
          dolorum temporibus vero, facilis aut similique optio, minus neque?
        </div>
      </main>
    </div>
  );
};

export default Slug;
