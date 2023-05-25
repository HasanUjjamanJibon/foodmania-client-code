import React from "react";
import ReactToPdf from "react-to-pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div>
      <div className="text-center mt-20 ">
        <ReactToPdf targetRef={ref} filename="blogs.pdf" scale={0.8}>
          {({ toPdf }) => (
            <button
              className="btn btn-primary inline-block space-x-2"
              onClick={toPdf}
            >
              <span> Generate to pdf</span>
              <AiOutlineCloudDownload className="inline-block text-2xl" />
            </button>
          )}
        </ReactToPdf>
      </div>

      <div ref={ref} className="px-4 md:px-0 mt-12 mb-36 max-w-7xl mx-auto">
        {/*===============================
                BLOG  SECTION
        ====================================*/}
        <h2 className="text-center text-3xl py-6 font-bold bg-gray-800 text-gray-400">Blogs</h2>
        <div className="h-fit mb-4 p-8 w-full shadow-md rounded-md ">
          {/*===============================
                QUESTION : 01
        ====================================*/}
          <h3 className="text-2xl font-semibold">
            01. Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <div className="p-6">
            <div>
              <h2 className="font-semibold text-xl">Un-controlled component</h2>
              <li>The component manages own state internally.</li>
              <li>
                It handles the state changes automatically without requiring any
                external updates.
              </li>
              <li>
                The state of the list component is not controlled by any
                external data or callbacks.
              </li>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Controlled component</h2>
              <li>
                The component relies on external data and callbacks to manage
                its state.
              </li>
              <li>
                Controlled components can be more complex to implement than
                uncontrolled components.
              </li>
              <li>
                The state of the list component is controlled by external data
                and callbacks.
              </li>
            </div>
          </div>
        </div>

        {/*===============================
                QUESTION : 02
        ====================================*/}
        <div className="h-fit mb-4 p-8 w-full shadow-md rounded-md ">
          <h3 className="text-2xl font-semibold">
            02. How to validate React props using PropTypes?
          </h3>
          <h4 className="text-lg">
            Proptype is a library of React. It is used check the types of props,
            for what error can be solve easily, Error easily catch & solve. If
            types does not match, it help identify & fix the error code.
            validation process below:
          </h4>
          <li>import PropType Libray from prop-types</li>
          <li>Define the component object prototype</li>
          <li>
            If I expected String type, define a object key string type & value
            will be{" "}
            <span className="font-bold text-error">PropTypes.string</span>
          </li>
          <li>
            If i want to make required, then i have to add{" "}
            <span className="font-bold text-error">isRequired</span> after the
            type of string. like as{" "}
            <span className="font-bold text-error">
              PropTypes.string.isRequired
            </span>
          </li>
        </div>

        {/*===============================
                QUESTION : 03
        ====================================*/}
        <div className="h-fit mb-4 p-8 w-full shadow-md rounded-md ">
          <h3 className="text-2xl font-semibold">
            03. Tell us the difference between nodejs and express js.?
          </h3>
          <div className="p-6">
            <div>
              <h2 className="font-semibold text-xl">Node JS</h2>
              <li>Server-side JavaScript runtime.</li>
              <li>
                Can be used to build a wide range of applications, not just web
                applications.
              </li>
              <li>
                Lower-level technology that provides more control over
                application architecture.
              </li>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Express JS</h2>
              <li>Web application framework built on Node.js.</li>
              <li>Offers routing, middleware, and template engines.</li>
              <li>Specifically designed for building web applications.</li>
            </div>
          </div>
        </div>

        {/*===============================
                QUESTION : 04
        ====================================*/}
        <div className="h-fit mb-4 p-8 w-full shadow-md rounded-md ">
          <h3 className="text-2xl font-semibold">
            04. What is a custom hook, and why will you create a custom hook?
          </h3>
          <div className="p-6">
            <div>
              <h2 className="font-semibold text-xl">Custom Hook : </h2>
              <li>
                A reusable function in React that shares stateful logic between
                components.
              </li>
              <h2 className="font-semibold text-xl">Why used Custom Hook : </h2>
              <li>Solve common problem</li>
              <li>Implement specific Feature in a best way</li>
              <li>Reuse code across all components.</li>
              <li>Make code simplicity & Reduce Complexity</li>
              <li>Reduce code duplication & easy to maintainability</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
