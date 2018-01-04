import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createAccount } from '../actions/auth';

class CreateAccountModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
      touched: {
        email: false,
        password: false
      }
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log('modal email', this.state.email);
    if(this.state.validEmail && this.state.validPassword) {
      this.props.createAccount(this.state.email, this.state.password);
    }
  }
  onEmailChange = (e) => {
    const email = e.target.value.trim();
    this.setState(() => ({ email }));
  }
  validateEmail = (e) => {
    this.setState(() => ({ touched: {...this.state.touched, email: true} }));
    const email = this.state.email;
    if (email.match(/\S*@\S+\.\S+/)) {
      this.setState(() => ({ validEmail: true }));
    } else {
      this.setState(() => ({ validEmail: false }));
    }
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  validatePassword = (e) => {
    this.setState(() => ({ touched: { ...this.state.touched, password: true } }));
    const password = this.state.password;
    // One capital letter, one lower case, one digit
    if (password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,16}$/)) {
      this.setState(() => ({ validPassword: true }));
    } else {
      this.setState(() => ({ validPassword: false }));
    }
  }
  render() {
    return (
      <Modal
        isOpen={this.props.createAccountOption}
        contentLabel="Create new account"
        closeTimeoutMS={200}
        className="modal"
      >
      <div className="form__container">
        <form className="form" onSubmit={this.onSubmit}>
          <label>Email Address:</label>
          <input type="text" placeholder="example@gmail.com" value={this.state.email} onChange={this.onEmailChange} onBlur={this.validateEmail} />
          {this.state.touched.email && !this.state.validEmail && <p className="form.p">Please enter a valid email!</p>}
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.onPasswordChange} onBlur={this.validatePassword} />
          {this.state.touched.password && !this.state.validPassword && <p>Invalid password! Password must contain 8 or more characters, 1 capital, 1 lowercase, and 1 number</p>}
          <button className="button button--secondary">Create Account</button>
        </form>
      </div>
      </Modal>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  createAccount: (email, password) => dispatch(createAccount(email, password))
});

export default connect(undefined, mapDispatchToProps)(CreateAccountModal);