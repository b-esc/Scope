// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import {
    Container, CssBaseline, Grid, Paper, Card,
    CardActionArea, CardActions, CardMedia, CardContent,
    Typography, Button, Collapse
    } from '@material-ui/core';

type Props = {
  rootMaxWidth: number,
  mediaMaxHeight: number,
  cardImg: any,
  content?: any,
}

export default function ContentCard({rootMaxWidth, mediaMaxHeight, cardImg, content} : Props){
  const [expanded, setExpanded]: bool = useState(false);
  const toggleExpand = () =>{
    setExpanded(!expanded);
  }
    return(
        <Card style={{maxWidth: rootMaxWidth}}>
        <CardActionArea onClick={toggleExpand}>
          <CardMedia
            style={{
              maxHeight: mediaMaxHeight,
              maxWidth: rootMaxWidth,
            }}
            component="img"
            image={cardImg}
            title="Profile Picture"
          />
        </CardActionArea>
        <CardContent style={{maxHeight: rootMaxWidth,}}>
          <Typography gutterBottom variant="h3">
            Article Title
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Ray Charles, Sept 21 2020
          </Typography>
        <Collapse in={expanded} timeout="auto">
          <CardContent >
            <Typography paragraph>
              {content}
            </Typography>
          </CardContent>
        </Collapse>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary">
            Share
          </Button>
          <Button size="large" color="primary" onClick={toggleExpand}>
            {(expanded) ? 'Collapse' : 'Expand'}
          </Button>
        </CardActions>
      </Card>
    )
}
