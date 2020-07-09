import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
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

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      type: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired
          }).isRequired
      ).isRequired
    }).isRequired,
    onAnswer: PropTypes.func.isRequired
  };

  return WithUserAnswer;
};

export default withUserAnswer;
