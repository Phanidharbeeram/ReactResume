import React, { useState } from "react";
import SimpleCard from "./Contactcard";
import style from "./Contact.module.css";
import axios from "axios";
function Contact() {
  const [comment, setcomment] = useState({
    email: "",
    comment: "",
  });
  const [contactlinks] = useState([
    {
      name: `Mobile Number`,
      mail: "+91 9492979204",

      img:
        "https://previews.123rf.com/images/alliedcomputergraphics/alliedcomputergraphics1206/alliedcomputergraphics120600424/13981757-antique-telephone-vinyl-ready.jpg",
    },

    {
      name: `Gmail`,
      mail: "phanidharbeeram@gmail.com",

      img: "https://wiggcumppitic.tk/uploads/gmail-email-logo-png-16.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/phanidharbeeram",
      img: "https://i.ya-webdesign.com/images/icon-png-logos-7.png",
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/phanidhar-beeram-81292516b/",
      img:
        "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png",
    },
    {
      name: "FaceBook",
      url: "https://www.facebook.com/phanidhar.beeram/",
      img:
        "https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png",
    },
  ]);
  const addComment = (e) => {
    e.preventDefault();
    console.log(comment);
    axios
      .post("http://localhost:4000/comment", comment)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const changetracker = (e) => {
    setcomment({ ...comment, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      <h1 className={style.h1c}>contact page</h1>
      <div className={style.mam}>
        <div className={style.main}>
          {contactlinks.map((link, i) => (
            <SimpleCard key={i} link={link} />
          ))}
        </div>
        <div className={style.form}>
          <form onSubmit={addComment}>
            <label htmlFor="email">Enter Your Email:</label>
            <br />
            <input
              type="text"
              name="email"
              className={style.in}
              placeholder="Enter Your Email"
              onChange={changetracker}
            />{" "}
            <br />
            <label htmlFor="Comment">Comment</label> <br />
            <textarea
              name="comment"
              cols="30"
              rows="10"
              onChange={changetracker}
            ></textarea>{" "}
            <br />
            <button type="submit">Submit Comment</button>{" "}
          </form>
        </div>
      </div>{" "}
    </React.Fragment>
  );
}

export default Contact;
