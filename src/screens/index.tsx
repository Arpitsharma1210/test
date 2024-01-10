import React from 'react';
import { Switch,Route,Redirect} from 'react-router-dom';

import { AuthenticationStatus } from '../redux/reducers/auth';
import { OnlyWith } from '../components';
import { ForgotPassword, Login, ResetPassword, Signup } from "./auth";
import { routes } from "../utils";
import Dashboard from "./dashboard";
import Test from "./test";

const Screens: React.FC = () => (
  <>
    <OnlyWith status={AuthenticationStatus.AUTHENTICATED}>
      <Switch>
        <div>Hiii AUTHENTICATED Developer</div>
      </Switch>
    </OnlyWith>
    <OnlyWith status={AuthenticationStatus.NOT_AUTHENTICATED}>
      <Switch>
          <Route path={routes.login} component={Login} />
          <Route path={routes.signup} component={Signup} />
          <Route path={routes.forgotPassword} component={ForgotPassword} />
          <Route path={routes.resetPassword} component={ResetPassword} />
          <Route path={routes.dashboard.root} component={Dashboard} />
  <Route path={routes.test.root} component={Test} />
          <Route component={() => <Redirect to={routes.login} />} />
      </Switch>
    </OnlyWith>
  </>
);

export default Screens;
