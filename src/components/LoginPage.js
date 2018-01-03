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
          <button className="button" onClick={this.props.startLogin}>Login with Google</button>
          <button className="button" onClick={this.startCreateAccount}>Create a new account</button>
            <button className="button" onClick={this.startLoginExisting}>Log in to Existing Account</button>
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
