import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { logIntoExistingAccount } from '../actions/auth';

class LogIntoAccountModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.logIntoExistingAccount(this.state.email, this.state.password);
  }
  onEmailChange = (e) => {
    const email = e.target.value.trim();
    this.setState(() => ({ email }));
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  render() {
    return (
      <Modal
        isOpen={this.props.loginExistingAccountOption}
        contentLabel="Log in to account"
        closeTimeoutMS={200}
        className="modal modal--secondary"
      >
        <form className="form">
          <label>Email Address:</label>
          <input type="text" placeholder="example@gmail.com" value={this.state.email} onChange={this.onEmailChange} onBlur={this.validateEmail} />
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.onPasswordChange} onBlur={this.validatePassword} />
          <div className="form__buttons">
            <button className="button button--secondary" onClick={this.props.closeModal}>Cancel</button>
            <button className="button" onClick={this.onSubmit}>Log In</button>
          </div>
        </form>
      </Modal>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  logIntoExistingAccount: (email, password) => dispatch(logIntoExistingAccount(email, password))
});

export default connect(undefined, mapDispatchToProps)(LogIntoAccountModal);