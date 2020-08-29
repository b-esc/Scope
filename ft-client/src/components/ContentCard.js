// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, CssBaseline, Grid, Paper, Card,
    CardActionArea, CardActions, CardMedia, CardContent,
    Typography, Button
    } from '@material-ui/core';

type Props = {
  rootMaxWidth: number,
  mediaMaxHeight: number,
  cardImg: any,
}

export default function ContentCard({rootMaxWidth, mediaMaxHeight, cardImg} : Props){
    return(
        <Card style={{maxWidth: rootMaxWidth}}>
        <CardActionArea>
          <CardMedia
            style={{
              maxHeight: mediaMaxHeight,
            }}
            component="img"
            image={cardImg}
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