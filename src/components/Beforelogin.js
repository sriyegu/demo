import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
   
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function Beforelogin(props)
{
    const classes = useStyles();
    return(
        <div className='pad-5'>
            <Button

            onClick="{props.afterclick}"
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Login
          </Button>
            </div>

    )
}

export default Beforelogin;