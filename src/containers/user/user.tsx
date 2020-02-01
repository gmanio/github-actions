import React from 'react';
import styled from 'styled-components';
import { NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import FormatHelper from 'src/utils/FormatHelper';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

// function onSignIn (googleUser) {
//   const profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

function signOut () {
  var auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

const User = (props: any) => {
  const handleSuccess = () => {
    debugger
  };

  const handleFailure = () => {
    debugger;
  }
  const [auth, setAuth] = React.useState();
  const handleAuth = () => {
    const auth = window.gapi.auth2
    console.log(auth);
    debugger;
  };
  React.useEffect(() => {
    if (window.gapi) {
      window.gapi.load('auth2', () => {
        auth.getAuthInstance().currentUser.get().getBasicProfile().getName()

        // const gauth = window.gapi.auth2.init({
        //   client_id: '328243791628-t7635a16s44jptmj023e1ntf6auq0q5u.apps.googleusercontent.com',
        //   scope: 'profile'
        // });
        // setAuth(gauth);
      });
    }
  }, []);

  // React.useEffect(() => {
  //   if (auth) {
  //     console.log(auth.isSignedIn.get());
  //   }
  //   //   const googleUser = auth.currentUser.listen(() => {
  //   //     debugger;
  //   //   });
  //   //   console.log(googleUser);
  //   //   debugger;
  //   // }
  // }, [auth]);

  return (
    <>
      <div className="g-signin2" data-onsuccess={handleSuccess}></div>
      <button onClick={handleAuth}>custom login</button>
      <div className={'g-signOut2'}>signOut</div>
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
