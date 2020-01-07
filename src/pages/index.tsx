import React from 'react';
import 'isomorphic-fetch';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 5px;
`;
const IndexPage = (props: any) => {
  const title = `It's working`;
  const [data, setData] = React.useState('test');
  const handleFetchData = async () => {
    const promise = await fetch(`/api/comments`);
    const response = await promise.json();

    setData(JSON.stringify(response));
  };

  return (
    <>
      <Title>{title}</Title>
      <button onClick={handleFetchData}>fetch</button>
      <span>{props.response}</span>
    </>
  )
};

IndexPage.getInitialProps = async () => {
  const asyncFetch = await fetch(`/api/comments`);
  const response = await asyncFetch.json();

  return response;
};

export default IndexPage;