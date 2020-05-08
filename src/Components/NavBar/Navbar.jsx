import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import "../../App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    color: "whitesmoke",
    textDecoration: "none",
    marginRight: "25px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <NavLink className={classes.title} to="/">
              HOME
            </NavLink>
            <NavLink
              className={classes.title}
              activeClassName="current"
              to="/eduQualifications"
            >
              EDUCATION
            </NavLink>

            <NavLink
              className={classes.title}
              activeClassName="current"
              to="/techSkills"
            >
              TECHNICAL SKILLS
            </NavLink>
            <NavLink
              className={classes.title}
              activeClassName="current"
              to="/Contact"
            >
              CONTACT ME
            </NavLink>

            <NavLink className={classes.title} to="/login">
              LOGIN
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
