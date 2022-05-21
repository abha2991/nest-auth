import {
    CircularProgress,
    LinearProgress,
    makeStyles,
    createStyles,
} from '@material-ui/core'
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
        },
        margin: {
            margin: theme.spacing(3),
        },
        linearProgress: {
            width: theme.spacing(30),
        },
    })
);

function Progress() {
    const classes = useStyles();
    const [level, setLevel] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
        }, 700);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
      <CircularProgress className={classes.margin} />
      <CircularProgress color="secondary" className={classes.margin} />
      <CircularProgress
          color="secondary"
          variant="determinate"
          value={level}
          //className={classes.margin}
      />
      <LinearProgress  />
      <LinearProgress
          variant="determinate"
          value={level}
          //className={[classes.linearProgress, classes.margin]}
      />
      <LinearProgress
          variant="buffer"
          value={level}
          valueBuffer={level + 10}
         // className={[classes.linearProgress, classes.margin]}
      />
    </div>
    );
}

export default Progress;
