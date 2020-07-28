import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {getAuthStatus} from '../../redux/reducer/user/selectors';
import {connect} from 'react-redux';

interface Props {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  render: () => void;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {authorizationStatus, render, path, exact} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
