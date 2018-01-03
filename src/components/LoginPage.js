import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import CreateAccountModal from './CreateAccountModal';
import LogIntoAccountModal from './LogIntoAccountModal'

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createAccountOption: undefined,
      loginExistingAccountOption: undefined
    }
  }
  startCreateAccount = () => {
    this.setState({
      createAccountOption: true
    });
  };
  startLoginExisting = () => {
    this.setState({
      loginExistingAccountOption: true
    })
  }
  render() {
    return (
    <div>
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to get your expenses under control.</p>
          <button className="button__login" onClick={this.startLoginExisting}>Login</button>
          <p>Don't have an account?</p>
          <img className="box-layout__signin" src="/images/google.png" onClick={this.props.startLogin} />
          <button className="button__login button--secondary" onClick={this.startCreateAccount}>Create account</button>
        </div>
      </div>
      <CreateAccountModal createAccountOption={this.state.createAccountOption} />
      <LogIntoAccountModal loginExistingAccountOption={this.state.loginExistingAccountOption} />
    </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
