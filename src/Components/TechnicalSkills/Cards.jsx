import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: 300,
    width: 275,
    background:
      "linear-gradient(45deg,rgb(204,43,94,0.9) , rgb(117,58,136,0.5))",
    marginBottom: "10px",
  },

  title: {
    fontSize: 16,
  },
});

export default function OutlinedCard({ skill }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <img height="230px" width="235px" src={skill.url} alt={skill.name} />
        </Typography>
        <Typography variant="h5" component="h2">
          {skill.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
