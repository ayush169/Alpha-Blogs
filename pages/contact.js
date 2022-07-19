import React, { useState } from "react";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, phone, desc);
  //   const data = { name, email, phone, desc };

  //   Axios.post("http://localhost:3000/api/postcontact", {
  //     name,
  //     email,
  //     phone,
  //     desc,
  //   })
  //     .then((data) => {
  //       console.log("Success", data);
  //       alert("Thanks for contacting us");
  //       setName("");
  //       setEmail("");
  //       setPhone("");
  //       setDesc("");
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
        alert("Thanks for contacting us");
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className={styles.formtext}>
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="Phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="number"
            className={styles.input}
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="floatingTextarea" className={styles.formlabel}>
            Description
          </label>
          <textarea
            className={styles.input}
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
