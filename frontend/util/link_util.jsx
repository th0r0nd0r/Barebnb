import React from 'react';
import { Route, Link } from 'react-router-dom';

export const ReviewLink = ({ label, to }) => (
  <Route path={to} children={({ match }) => (
    <div className="leave-review-button-container">
      {match ? "" : <Link className="leave-review-button" to={to} >{label}</Link>}
    </div>
  )} />
);
