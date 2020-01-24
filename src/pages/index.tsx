import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';
import FormatHelper from '../utils/FormatHelper';

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
      <span>{JSON.stringify(props.response)}</span>
    </>
  )
};

IndexPage.getInitialProps = async ({ req }: NextPageContext) => {
  const { protocol, host } = FormatHelper.absoluteUrl(req);
  const url = `${protocol}/${host}/api/comments`;
  const res = await fetch(url);
  const response = await res.json();

  return { response };
};

export default IndexPage;
