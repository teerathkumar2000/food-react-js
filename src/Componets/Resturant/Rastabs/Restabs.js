import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: "black"
  },
}));

export default function NavTabs1() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor :"#E91E63"}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Paper style={{textAlign :"center", fontSize:"22px", fontWeight :"bold"}}>
            <h1>
                Order in padding
            </h1>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Paper style={{textAlign :"center",fontSize:"22px",  fontWeight :"bold"}}>
            <h1>
                Order in progress
            </h1>
        </Paper>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <Paper style={{textAlign :"center",fontSize:"22px", fontWeight :"bold"}}>
            <h1>
                Order Deliverd
            </h1>
        </Paper>
      </TabPanel>
    </div>
  );
}
