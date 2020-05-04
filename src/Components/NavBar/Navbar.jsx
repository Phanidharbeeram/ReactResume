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
  },
  title:{
    color:"white"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink to="/">Material_UI-HOme</NavLink>
            <NavLink activeClassName="current" to="/eduQualifications">
              Education
            </NavLink>

            <NavLink activeClassName="current" to="/techSkills">
              Technical Skills
            </NavLink>
            <NavLink activeClassName="current" to="/Contact">
              Contact me
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
