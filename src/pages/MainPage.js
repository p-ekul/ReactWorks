import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function MainPage(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Hello
      {props.children}
    </Typography>
  );
}

MainPage.propTypes = {
  children: PropTypes.node,
};

export default MainPage;