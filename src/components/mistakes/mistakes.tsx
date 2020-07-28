import * as React from 'react';

interface Props {
  mistakesCount: number;
}

const Mistakes: React.FC<Props> = (props: Props) => {
  const {mistakesCount} = props;
  const mistakes = new Array(mistakesCount).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((el, i) => <div className="wrong" key={`mistake-${i}`}></div>)}
    </div>
  );
};

export default Mistakes;
