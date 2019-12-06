import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    width:"100px",
    color: "white",
    backgroundColor: "#EC407A",
    fontWeight: "bold",
    fontSize :"30px"

  },
}));

 function Chips(props) {
  const classes = useStyles();

 
  function chip(){
   console.log(props)

  }

  // function handleClick() {
  //   alert('You clicked the Chip.');
  // }

  return (
    <div className={classes.root}>
      <Chip
        label={props.catogary}
        className={classes.chip}
        onClick={() => chip(props.catogary)}
      />
        
        </div>
  );
}

export default Chips