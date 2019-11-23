import {makeStyles} from "@material-ui/core";
import * as React from "react";

interface P {
  children: any;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // maxWidth: 767, 今タブレットとの使い分けないからいらない
  },
}));

const MobileScreen: React.FC<P> = (props) => {
  const {
    children,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default React.memo(MobileScreen);
