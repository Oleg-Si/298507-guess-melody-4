import * as React from 'react';
import {Subtract} from 'utility-types';
import {QuestionGenre} from '../../types';

interface Props {
  question: QuestionGenre;
  onAnswer: (question: QuestionGenre, answers: Answer) => void;
}

interface State {
  answers: Answer;
}

interface InjectedProps {
  userAnswer: Answer;
  onChange: (answerIndex: number) => void;
  onAnswer: () => void;
}

type Answer = boolean[];

const withUserAnswer = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithUserAnswer extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(this.props.question.answers.length).fill(false)
      };

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(id) {
      const oldState = this.state.answers;

      oldState[id] = !oldState[id];
      const newState = oldState;

      this.setState({answers: newState});
    }

    _handleSubmit() {
      const {question, onAnswer} = this.props;
      onAnswer(question, this.state.answers);
    }

    render() {

      return (
        <Component
          {...this.props}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  return WithUserAnswer;
};

export default withUserAnswer;
