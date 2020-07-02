import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = (props) => {
  const {mistakesCount} = props;
  const mistakes = new Array(mistakesCount).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((el, i) => <div className="wrong" key={`mistake-${i}`}></div>)}
    </div>
  );
};

Mistakes.propTypes = {
  mistakesCount: PropTypes.number.isRequired
};

export default Mistakes;
