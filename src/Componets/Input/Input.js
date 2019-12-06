import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MDBInput, } from "mdbreact";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
  container: {
   
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },


  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%'
  },
}));

function OutlinedTextFields(props) {
  const classes = useStyles();



  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="outlined-email-input"
        label={props.label}
        className={classes.textField}
        type={props.type}
        name={props.name}
        autoComplete="email"
        margin="normal"
        style={props.style}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
      />

    </form>
  );
}

const InputPage = (props) => {
  return (
    <MDBInput onChange={props.onChange} disabled={props.disabled} value={props.value} label={props.label} hint={props.hint} type={props.type} />
  );
}







const DropdownPage = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);


  function handleChange(event) {
    setAge(event.target.value);
    console.log(event.target.value)
    props.onChange(event)
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
  return (
    <form>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="demo-controlled-open-select">{props.label}</InputLabel>
    <Select
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={age}
      onChange={handleChange}
      inputProps={{
        name: 'age',
        id: 'demo-controlled-open-select',
      }}
      disabled={props.disabled}
      className={props.className}
    >
      {
        props.list.map((val,ind)=>{
          return <MenuItem  key={ind} value={val.name} >{val.name}</MenuItem>

        }) 
      }
    </Select>
  </FormControl>
</form>
  );
}


class InputIcon extends React.Component {
  render() {
    return (
      <MDBInput
      label={this.props.label}
      icon={this.props.icon}
      group={this.props.group}
      type={this.props.type}
      validate={this.props.validate}
        error={this.props.error}
        success={this.props.success}
      />
    )
  }
}





export {
  OutlinedTextFields,
  InputPage,
  DropdownPage,
 InputIcon


}