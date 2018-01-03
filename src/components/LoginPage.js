import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import CreateAccountModal from './CreateAccountModal';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createAccountOption: undefined
    }
  }
  startCreateAccount = () => {
    this.setState({
      createAccountOption: true
    });
  };
  render() {
    return (
    <div>
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to get your expenses under control.</p>
          <button className="button" onClick={this.props.startLogin}>Login with Google</button>
          <button className="button" onClick={this.startCreateAccount}>Create a new account</button>
        </div>
      </div>
      <CreateAccountModal createAccountOption={this.state.createAccountOption} />
    </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  // createAccount: () => dispatch(createAccount())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
