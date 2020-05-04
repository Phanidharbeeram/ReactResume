import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    boxShadow: "5px 10px  #888888",
    border: "1px solid black",
  },
  title: {
    fontSize: 25,
  },
});

export default function SimpleCard({ link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h4>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            <a href={link.url}>
              <img widht="250px" height="150px" src={link.img} alt="logos" />
            </a>
            <br />
            {link.name} <br />
            <span style={{ fontSize: 16 }}>
              {link.mail} <br />
              <a href={link.url}>{link.name}</a>
            </span>
            <br />
          </Typography>
        </h4>{" "}
      </CardContent>
    </Card>
  );
}
