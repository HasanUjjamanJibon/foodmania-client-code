import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/favicon.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AuthProviderInfo } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const {
    userLogin,
    passwordReset,
    handleGithubLogin,
    handleGoogleLogin,
    Toast,
  } = useContext(AuthProviderInfo);
  const emailRef = useRef();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  /*===============================
            LOGIN HANDLER
    ====================================*/

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // SIGNIN WITH LOGIN
    userLogin(email, password)
      .then((result) => {
        setError("");
        Toast("successfully login");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        setError(error.code);
      });

    // FORM RESET
    form.reset();
  };

  /*===============================
            RESET PASSWORD HANDLER
    ====================================*/
  const HandleResetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    passwordReset(email)
      .then((result) => {
        Toast("Password reset email sent. Please Check Your Mail !!");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  /*===============================
             Google HANDLER
    ====================================*/
  const googleLoginHandler = () => {
    handleGoogleLogin();
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 5000);
  };

  /*===============================
             Github HANDLER
    ====================================*/
  const githubLoginHandler = () => {
    handleGithubLogin();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-fit">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {/* -----------------
                  LOGO
          ------------------------*/}
          <div className="text-center pt-8">
            <Link
              to="/"
              className=" normal-case mx-auto w-fit  text-center text-2xl font-bold flex items-center"
            >
              <img src={logo} className="h-10 w-auto mr-3" alt={logo} />
              <span className="text-gray-800 dark:text-white">Food</span>
              <span className="text-warning">Mania</span>
            </Link>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            {/* -----------------
                  LOGIN FORM
          ------------------------*/}
            <form className="space-y-4 md:space-y-6" onSubmit={handleUserLogin}>
              {/* form email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              {/* INPUT PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {/* FORGET PASSSWORD */}
              <div className="flex items-start">
                <a
                  onClick={HandleResetPass}
                  className="text-sm cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              {/* ERROR STATUS TEXT */}
              <p className="text-error text-center font-medium text-lg ">
                {error}
              </p>
              {/* Login button */}
              <button
                type="submit"
                className="w-full text-white bg-purple-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>

              {/* Signup route */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium btn-link text-primary-600 hover:underline dark:text-primary-500"
                >
                  Click Here
                </Link>
              </p>
            </form>
            <div className="divider">or</div>
            {/*===============================
                    SOCIAL LOGIN
           ====================================*/}
            <div className="space-y-2">
              {/* GOOGLE BUTTON */}
              <button
                onClick={googleLoginHandler}
                className="flex items-center gap-4 justify-center text-white bg-info py-2 w-full rounded-md"
              >
                {" "}
                <FaFacebook className="text-xl" />
                Continue with Google
              </button>

              {/* GITHUB BUTTON */}
              <button
                onClick={githubLoginHandler}
                className="flex items-center gap-4 justify-center text-white bg-primary py-2 w-full rounded-md"
              >
                {" "}
                <FaGithub className="text-xl" />
                Continue with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
