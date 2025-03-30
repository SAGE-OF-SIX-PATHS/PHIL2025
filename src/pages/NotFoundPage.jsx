import Button from "../components/Button";
import { Link } from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page not found
        </p>
        <p className="mt-2 text-lg text-gray-600">
          We couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <br />
          <Button text="Go Home" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
