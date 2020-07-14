import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AuthorizationScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._formRef = React.createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;
    const form = this._formRef.current;

    const password = form.querySelector(`#password`);
    const name = form.querySelector(`#name`);

    onSubmit({
      login: name,
      password
    });
  }

  render() {
    const {onReplayButtonClick} = this.props;

    return (
      <section className="login">
        <div className="login__logo">
          <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
        </div>
        <h2 className="login__title">Вы настоящий меломан!</h2>
        <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
        <form className="login__form" action="#" ref={this._formRef} onSubmit={this._handleSubmit}>
          <p className="login__field">
            <label className="login__label" htmlFor="name">Логин</label>
            <input className="login__input" type="text" name="name" id="name"/>
          </p>
          <p className="login__field">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input className="login__input" type="text" name="password" id="password"/>
            <span className="login__error">Неверный пароль</span>
          </p>
          <button className="login__button button" type="submit">Войти</button>
        </form>
        <button className="replay" type="button" onClick={onReplayButtonClick}>Сыграть ещё раз</button>
      </section>
    );
  }
}

AuthorizationScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
