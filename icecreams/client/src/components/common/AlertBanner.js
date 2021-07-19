import React from 'react';

const AlertBanner = ({ message, variant }) => {
  const alertMessage =
    message || 'An unexpected error ocurred. Please try again later.';
  return (
    <div className="alert-banner" role="alert">
      {alertMessage}
    </div>
  );
};

export default AlertBanner;
