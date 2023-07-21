import React from "react";
import ErrorImage from "../images/Na_Nov_26.jpg";
import "./Error.scss";

function Error() {
  return (
    <div>
      <h1 className="error-type">404 Error Page Not Found</h1>
      <img src={ErrorImage} alt="Error Image" className="error-image" />
    </div>
  );
}

export default Error;
