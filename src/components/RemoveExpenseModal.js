import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import numeral from 'numeral';

const RemoveExpenseModal = (props) => (
  <Modal
    isOpen={props.removeExpenseOption}
    contentLabel="Confirm Expense Removal"
    closeTimeoutMS={200}
    className="modal"
  >
    <h1>Are you sure you want to remove this expense?</h1>
    <h3>This can not be undone!</h3>
    <button
      className="button"
      onClick={(e) => {
        props.handleRemoveExpenseConfirmation(e);
        props.handleRemoveExpense(e);
      }}
    >
      Yes
    </button>
    <button
      className="button button--secondary"
      onClick={props.handleRemoveExpenseConfirmation}
    >
      No
    </button>
  </Modal>
);

export default RemoveExpenseModal;