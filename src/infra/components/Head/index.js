import React from 'react';
import PropTypes from 'prp-types';
import NextHead from 'next/head';

function Head({ title }) {
  return(
    <NextHead>
      <title>
        {{title}}
      </title>
    </NextHead>
  );
}

Head.PropTypes = {
  title: PropTypes.sting.isRequired,
}

export default Head;