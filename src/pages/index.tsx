import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => {
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
      <span>{data}</span>
    </>
  )
};
