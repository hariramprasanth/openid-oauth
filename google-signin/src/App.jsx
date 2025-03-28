import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        }
      )
        .then((resp) => resp.json())
        .then((data) => setProfile(data))
        .catch((err) => console.log(err));
    }
    console.log('User:', user);
  }, [user]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {profile ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Hello, {profile.name}!</h2>
          <img src={profile.picture} alt="user image" style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '20px' }} />
          <button onClick={logOut} style={{ padding: '10px 20px', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Log out
          </button>
          <div> {user.access_token} </div>
        </div>
      ) : (
        <button onClick={() => login()} style={{ padding: '15px 30px', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
          Sign in with Google 🚀
        </button>
      )}
    </div>
  );
}

export default App;