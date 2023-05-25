import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/favicon.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AuthProviderInfo } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const {
    createNewUser,
    handleGithubLogin,
    handleGoogleLogin,
    Toast,
    logOutUser,

    isShowPass,
    setShowPass,
  } = useContext(AuthProviderInfo);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  /* CREATE USER HANDLER BUTTON */
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;

    if (name === "" || email === "" || url === "" || password === "") {
      return setError("Please Fill the blanks field");
    }
    if (password.length < 6) {
      return setError("Password Must be 6 character");
    }
    // CREATE USER FUNCTION
    createNewUser(email, password)
      .then((result) => {
        const newUser = result.user;
        logOutUser();
        Toast("Account Created Successfully");
        setError("");
        // this action is for not to auto login
        setTimeout(() => {
          navigation("/login");
        }, 2000);
        updateProfile(newUser, {
          displayName: name,
          photoURL: url,
        })
          .then((result) => {
            setError("");
          })
          .catch((error) => {
            setError(error.code);
          });
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

  };

  /*===============================
               Github HANDLER
      ====================================*/
  const githubLoginHandler = () => {
    handleGithubLogin();

  };

  return (
    <section className="mt-20 mb-36">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="text-center pt-8">
            <Link
              to="/"
              className="normal-case mx-auto w-fit  text-center text-2xl font-bold flex items-center"
            >
              <img src={logo} className="h-10 w-auto mr-3" alt={logo} />
              <span className="text-gray-800 dark:text-white">Food</span>
              <span className="text-warning">Mania</span>
            </Link>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register your account
            </h1>

            {/* ========================
                   Registration form
            ============================*/}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleCreateUser}
            >
              {/* ========================
                    form name input
            ============================*/}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your name"
                />
              </div>

              {/* ========================
                    form email input
            ============================*/}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                />
              </div>
              {/* ========================
                    form photoURL input
             ============================*/}
              <div>
                <label
                  htmlFor="photoURL"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  name="url"
                  id="photoURL"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your photo url"
                />
              </div>
              {/* ========================
                    form password input
            ============================*/}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  type={isShowPass ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                {/* show password input */}
                <label
                  onChange={() => setShowPass(!isShowPass)}
                  className="flex items-center gap-4 mt-3"
                >
                  <input type="checkbox" className="checkbox checkbox-xs" />{" "}
                  show password
                </label>
              </div>

              {/* error text */}
              <p className="text-error text-center font-medium text-lg ">
                {error}
              </p>

              {/* signup button */}
              <button
                type="submit"
                className="w-full text-white bg-purple-700  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>

              {/* login route button */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an Account?{" "}
                <Link
                  to="/login"
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
              {/* google login button */}
              <button
                onClick={googleLoginHandler}
                className="flex items-center gap-4 justify-center text-white bg-info py-2 w-full rounded-md"
              >
                {" "}
                <FaFacebook className="text-xl" />
                Continue with Google
              </button>

              {/* github login button */}
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

export default Signup;
