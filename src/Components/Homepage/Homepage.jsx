import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import myintropic from "../../Images/Dslr2.jpeg";
import Axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Homepage() {
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    const UpdateComments = async () => {
      await Axios.get("http://localhost:4000/updatecomments")
        .then((res) => {
          console.log(res);
          setcomments(res.data);
        })
        .catch((err) => console.log(err));
    };
    UpdateComments();
  }, []);
  return (
    <div className={styles.mainpage}>
      <div className={styles.h1}>
        <h1>
          HI......
          <span  className="emoji" role="img" label="handShake">
            &#128075;
          </span>
          ,
          <br />I am Phanidhar Beeram. A FullStack Developer From Hyderabad.
        </h1>
      </div>

      <img className={styles.intro} src={myintropic} alt="my Intro" />
      <div className={styles.comments}>
        <h2>Comments</h2>
        {comments.map((item, i) => (
          <Card key={i}>
            <CardContent>
              <h3>{item.email}</h3>
              <p>{item.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
