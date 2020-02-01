import React from 'react';
import styled from 'styled-components';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import FormatHelper from 'src/utils/FormatHelper';

// function onSignIn (googleUser) {
//   const profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

const User = (props: any) => {
  React.useEffect(() => {
    if(window.gapi){
      window.gapi.load('auth2', () => {
        console.log('loaded');
      });
    }

  }, []);
  return (
    <>
      User
    </>
  )
};

User.getInitialProps = async ({ req }: NextPageContext) => {
  const { protocol, host } = FormatHelper.absoluteUrl(req);
  const url = `${protocol}/${host}/api/comments`;
  const res = await fetch(url);
  const response = await res.json();

  return { response };
};

export default User;
