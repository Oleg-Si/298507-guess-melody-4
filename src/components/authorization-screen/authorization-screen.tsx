import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

interface Props {
  onSubmit: (data: {login: string; password: string}) => void;
  onReplayButtonClick: () => void;
}

class AuthorizationScreen extends React.PureComponent<Props> {
  private _formRef: React.RefObject<HTMLFormElement>;

  constructor(props: Props) {
    super(props);

    this._formRef = React.createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;
    const form = this._formRef.current;

    const password = form.querySelector<HTMLInputElement>(`#password`).value;
    const name = form.querySelector<HTMLInputElement>(`#name`).value;

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
        <Link
          to={AppRoute.ROOT}
          onClick={onReplayButtonClick}
          className="replay"
        >Сыграть ещё раз</Link>
      </section>
    );
  }
}

export default AuthorizationScreen;
