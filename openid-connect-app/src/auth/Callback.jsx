import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "./authConfig";
import { useAuth } from "./AuthProvider";

const Callback = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log("Before signinRedirectCallback");
        const googleUser = await googleAuth.signinCallback();
        console.log("Before after signinRedirectCallback");
        if (googleUser) {
          setUser({
            name: googleUser.profile.name,
            email: googleUser.profile.email,
          });
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login Callback Error:", error);
      }
    };

    handleCallback();
  }, [navigate, setUser]);

  return <h2>Signing in...</h2>;
};

export default Callback;
