import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "0 10%",
    boxShadow: "5px 10px  #888888",
    border: "1px solid black",
    marginBottom: "20px",
  },
  title: {
    display: "block",
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
              <a href={link.url}>Officail Site</a>
            </span>
            <p>Percentage: {link.percentage}</p>
            <br />
            <p>Course:{link.branch}</p>
            <br />
            <a href={link.location}>
              <i className="fas fa-search-location"></i>
            </a>
          </Typography>
        </h4>{" "}
      </CardContent>
    </Card>
  );
}
