import React from 'react'
import ReactDOM from 'react-dom'
import Playground from 'graphql-playground';
import fetch from 'isomorphic-unfetch';

const IndexPage = (props: any) => {
  return (
    <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
  )
};

export default IndexPage;
