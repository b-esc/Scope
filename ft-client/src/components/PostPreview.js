// @flow
import React from 'react';
import { useStyles } from '../Styles';
import {
    Container, CssBaseline, Grid, Paper, Card,
    CardActionArea, CardActions, CardMedia, CardContent,
    Typography, Button
    } from '@material-ui/core';

export default function PostPreview(){
    const StyleClasses = useStyles();

    return(
        <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            src="https://i.imgur.com/fUIsscE.jpg"
            title="Profile Picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lou Sonetz
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I am an Engineer!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
            Pop a Lou
          </Button>
          <Button size="large" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}