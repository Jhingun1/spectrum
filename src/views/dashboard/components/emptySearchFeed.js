// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeActiveThread } from 'src/actions/dashboardFeed';
import { Button } from 'src/components/buttons';
import { NullThreadFeed, NullHeading } from '../style';

const EmptySearchFeed = ({ dispatch, queryString }) => (
  <NullThreadFeed>
    <NullHeading>We couldn't find any results for "{queryString}"</NullHeading>
    <Link to={'/new/thread'}>
      <Button icon={'post'}>Be the first to post about it</Button>
    </Link>
  </NullThreadFeed>
);

export default connect()(EmptySearchFeed);
