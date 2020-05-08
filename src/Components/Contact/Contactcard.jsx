import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop:4,
    maxWidth: 250,
    maxHeight:170,
    boxShadow: "5px 10px  #888888",
    border: "1px solid black",
  },
  title: {
    fontSize: 15,
  },
  img: {
    width: "50px",
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
              <img className={classes.img} src={link.img} alt="logos" />
            </a>
            <br />
            {link.name} <br />
            <span>
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
