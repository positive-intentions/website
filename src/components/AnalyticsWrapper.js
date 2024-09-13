import React from 'react';

const Wrapper = ({ children, content, ...rest }) => {
  console.log({ rest })
  return (
    <div className="custom-wrapper">
      {/* Add your custom markup here */}
      <h1>testing</h1>
      {children}
      {content()}
    </div>
  );
};

export default Wrapper;
