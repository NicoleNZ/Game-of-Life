import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxHeight: 500
    },
});

const GalaxyList = (props) => {
    const classes = useStyles();

    return (

        <div className="card-container">
                {props.galaxies.map((el, index) => ( 
                    <Card style={{display: "inline-flex"}} className={classes.root} key={index} onClick={() => props.handleClick(index)}>
                           <CardActionArea>
                             <CardMedia
                              component="img"
                              height="200"
                              image={el.galaxyUrl}height="200" width="200"
                              title={el.galaxyName}
                            />
                            <CardContent style={{height: "100px"}}>
                              <Typography gutterBottom variant="h5" component="h2">
                                {el.galaxyName}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                {el.galaxyFact}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                    ))}
            
        </div>
    );
};

export { GalaxyList };
