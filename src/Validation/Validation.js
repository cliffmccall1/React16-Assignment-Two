import React from 'react';

const validation = props => {
  let validationMessage = 'Your input is long enough. You can stop.';

  if (props.inputLength <= 5) {
    validationMessage = 'Your input is too short. Type more.';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
