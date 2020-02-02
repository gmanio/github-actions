import React from 'react';
import * as Styled from './style';

const User = (props: any) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();

  const handleAuth = async () => {
    const gAuth = window.gapi.auth2;
    const response = await gAuth.getAuthInstance().signIn();
    console.log(response);
    setCurrentUser(gAuth.getAuthInstance().currentUser.get().getBasicProfile());
    setIsLogin(response.isSignedIn());
  };
  React.useEffect(() => {
    if (window.gapi) {
      window.gapi.load('auth2', () => {
        const gAuth = window.gapi.auth2;
        setIsLogin(gAuth.getAuthInstance().isSignedIn.get());
      });
    }
  }, []);

  React.useEffect(() => {
    if (isLogin) {
      const gAuth = window.gapi.auth2;
      setCurrentUser(gAuth.getAuthInstance().currentUser.get().getBasicProfile())
    }
  }, [isLogin]);

  const handleSignOut = async () => {
    const gAuth = window.gapi.auth2;
    await gAuth.getAuthInstance().signOut();
    setIsLogin(gAuth.getAuthInstance().isSignedIn.get());
  };
  return (
    <>
      <div>
        isLogined : {isLogin.toString()}
      </div>
      <button onClick={handleAuth}>custom login</button>
      <div className={'g-signOut2'} onClick={handleSignOut}>signOut</div>
      {isLogin && (<Styled.WrapperUser>
          <span>{currentUser.getName()}</span>
        </Styled.WrapperUser>
      )}
    </>
  )
};

// User.getInitialProps = async ({ req }: NextPageContext) => {
//   const { protocol, host } = FormatHelper.absoluteUrl(req);
//   const url = `${protocol}/${host}/api/comments`;
//   const res = await fetch(url);
//   const response = await res.json();
//
//   return { response };
// };

export default User;
