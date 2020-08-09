import React from 'react';
import { useStyles } from '../Styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';

export default function NavContainer() {
  const StyleClasses = useStyles();
  return (
    <div className={StyleClasses.root}>
      <CssBaseline />
      <Navbar />
    </div>
  );
}
