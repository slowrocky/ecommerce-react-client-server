import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Badge,
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();

  const { isAuthenticated } = ""; //useSelector(state => state.auth);
  const { items } = ""; //useSelector(state => state.cart);

  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Slowrock Shop
        </Typography>
        <div>
          {!isAuthenticated && (
            <Button color="inherit" component={Link} to={`/login`}>
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Button color="inherit" component={Link} to={`/orders`}>
              My Orders
            </Button>
          )}
          <IconButton
            aria-label="access shopping cart"
            color="inherit"
            component={Link}
            to={"/cart"}
          >
            <Badge badgeContent={items?.length || 0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
