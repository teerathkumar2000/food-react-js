import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { MDBBtn } from "mdbreact"
import MDBBtn from '../Button/Button'

import { Link } from 'react-router-dom'
import { fontFamily } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 300,
        display: "inline-block",
        margin: "7px"

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="" className={classes.avatar}>

                    </Avatar>
                }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={props.name}
            // subheader="September 14, 2016"
            />
            <CardMedia

                className={classes.media}
                image={props.file}
                title="Burger"
            />
            <CardContent>
                <Link to='/detailpage'>
                    <Typography variant="body2" color="textSecondary" component="p">

                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guest
        </Typography>
                </Link>
            </CardContent>


        </Card>
    );
}







const useStyles1 = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: "#c270e5"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 700,
    },
    //   image: {
    //     width: 128,
    //     height: 128,
    //   },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function ComplexGrid() {
    const classes = useStyles1();

    const [count, setCount] = useState(0);
    const [disabled, setDisable] = useState(false);




    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0,
    //         disabled: false,

    //     }
    // }
    // render() {
    // let { count } = this.state

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        {/* <ButtonBase className={classes.image}> */}
                        <img className={classes.img} alt="complex" src="https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg" />
                        {/* </ButtonBase> */}
                    </Grid>
                    <Grid item xs={12} lg={6} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    <h2> Standard license</h2>
                                </Typography>
                                <Typography variant="body2" gutterBottom color="#c90044">
                                    It's is very delicious dish. In Pakistan everyone likes this dish because when we make this type dish on that time we are very sincere with our work
                </Typography>
                                <Typography variant="body2" color="#c90044" >
                                    ID: 1030114
                </Typography>


                                <div style={{ marginTop: '10px', }}>
                                    <h3 >Quantity:</h3>
                                    <div style={{ display: 'flex', }} >
                                        <button style={{ height: "35px", width: "80px", fontWeight: "bold", fontSize: "24px", backgroundColor: "#eff0f5" }} disabled={disabled} onClick={() => { count > 0 ? setCount(count - 1) : setDisable(true) }}>-</button>
                                        <h5 style={{ margin: '10px' }}>{count}</h5>
                                        <button style={{ fontSize: "22px", height: "35px", width: "80px", fontWeight: "bold", backgroundColor: "#eff0f5" }}
                                            onClick={() => {
                                                setDisable(false)
                                                setCount(count + 1)
                                            }}>+</button>

                                    </div>
                                </div>
                            </Grid>
                            <Grid item>
                                {/* <Typography variant="body2" style={{ cursor: 'pointer',float:"right" }}> */}
                                <MDBBtn style={{
                                    backgroundColor: "#c270e5",
                                    color: "white",
                                    width: "200px",

                                }}
                                    color="#c90044" >Buy</MDBBtn>
                                {/* </Typography> */}

                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
// }
export {
    RecipeReviewCard,
    ComplexGrid,
}