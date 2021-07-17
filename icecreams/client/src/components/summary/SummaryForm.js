import React, { useState } from 'react';

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [termsAndConditionsHovered, setTermsAndConditionsHovered] =
    useState(false);

  const onCheckboxClick = () => {
    setDisabled((prevDisabled) => !prevDisabled);
  };

  const onTermsAndConditionsHover = () => {
    setTermsAndConditionsHovered(
      (prevTermsAndConditionsHovered) => !prevTermsAndConditionsHovered
    );
  };

  return (
    <form className="order-summary__form">
      <div className="form__checkbox-group">
        <input
          type="checkbox"
          className="form__checkbox-input"
          id="agree"
          onClick={onCheckboxClick}
        />
        <label htmlFor="agree" className="form__checkbox-label">
          I agree to&nbsp;
          <span
            className="terms-and-conditions"
            onMouseEnter={onTermsAndConditionsHover}
            onMouseLeave={onTermsAndConditionsHover}>
            Terms and Conditions
          </span>
        </label>
        {termsAndConditionsHovered && (
          <div className="popover">Here is some text</div>
        )}
      </div>
      <button className="btn btn-order" disabled={disabled}>
        Confirm order
      </button>
    </form>
  );
};

export default SummaryForm;
