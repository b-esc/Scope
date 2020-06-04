import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h4" color="textPrimary" gutterBottom>
      <Box fontFamily="Monospace">
        {props.children}
      </Box>
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
