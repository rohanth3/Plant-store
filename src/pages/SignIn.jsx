import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", 
    address: "",

  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleLogin = () => {
    login();
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      if (!userData.address) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          address: "Address is required.",
        }));
        return;
      }

      if (userData.password !== userData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Passwords must match.",
          confirmPassword: "Passwords must match.",
        }));
        return;
      }

      if (!validatePassword(userData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters long and include at least one letter, one number, and one special character.",
        }));
        return;
      }

    } else {
      if (!validatePassword(userData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters long and include at least one letter, one number, and one special character.",
        }));
        return;
      }
    }

    setErrors({ address: "", password: "", confirmPassword: "" });
    handleLogin();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231230/pngtree-watercolor-abstraction-of-greenery-background-image_13908220.png')",
      }}
    >
      <div className="bg-opacity-70 bg-black p-10 rounded-xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to</h1>
        <h1 className="text-4xl font-extrabold text-white mb-5">🌿Terra & Twine🌿</h1>        
        <h2 className="text-xl text-white mb-4">{isSignIn ? "Create an Account" : "Log in to Your Account"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignIn && (
            <div>
              <label className="block text-white text-left mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-black rounded-md"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-white text-left mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-white text-left mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />
            {errors.password && <p className="text-red-500 text-left">{errors.password}</p>}
          </div>

          {isSignIn && (
            <>
              <div>
                <label className="block text-white text-left mb-2">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 text-black rounded-md"
                  required
                />
                {errors.password && <p className="text-red-500 text-left">{errors.password}</p>}
                {errors.confirmPassword && <p className="text-red-500 text-left">{errors.confirmPassword}</p>}
              </div>

              <div>
                <label className="block text-white text-left mb-2">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="w-full p-3 mb-6 text-black rounded-md"
                  required
                />
                {errors.address && <p className="text-red-500 text-left">{errors.address}</p>} 
              </div>

            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 transition duration-300 mb-4"
          >
            {isSignIn ? "Sign Up" : "Log In"}
          </button>
        </form>

        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 transition duration-300"
        >
          {isSignIn ? "Already have an account? Log in" : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
