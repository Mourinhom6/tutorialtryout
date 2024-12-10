import React from 'react';

const Error = ({ status, exception_name, exception_message }) => {
    return (
      <div>
        <h1>Error: {status}</h1>
        <p>Exception: {exception_name}</p>
        <p>Message: {exception_message}</p>
        {/* Render a user-friendly message depending on the status */}
        {status === 404 ? <p>Page not found!</p> : null}
      </div>
    );
  };


export default Error;
