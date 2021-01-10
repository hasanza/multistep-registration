import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import styles from './Header.module.css';

const Header = () => {

  return (
    <AppBar position="static" className={styles.animBar} >
      <Toolbar>
          <Typography variant="h4">Registration Form</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
