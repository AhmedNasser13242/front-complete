import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useNavigate();
  const redirect = (path) => {
    history(path);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 600);
    // redirect once count is equal to 0
    count === 0 && redirect("/");
    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="container p-5 text-center">
      <p>Redirecting you in {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;
