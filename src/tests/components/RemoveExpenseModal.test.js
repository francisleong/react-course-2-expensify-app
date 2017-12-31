import React from 'react';
import { shallow } from 'enzyme';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';

let removeExpenseOption, handleRemoveExpenseConfirmation, handleRemoveExpense, wrapper;

beforeEach(() => {
  removeExpenseOption = undefined;
  handleRemoveExpenseConfirmation = jest.fn();
  handleRemoveExpense = jest.fn();
  wrapper = shallow(
    <RemoveExpenseModal
      removeExpenseOption={removeExpenseOption}
      handleRemoveExpenseConfirmation={handleRemoveExpenseConfirmation}
      handleRemoveExpense={handleRemoveExpense}
    />
  );

});

test('should render RemoveExpenseModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handleRemoveExpense (yes)', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(handleRemoveExpenseConfirmation).toHaveBeenCalled();
  expect(handleRemoveExpense).toHaveBeenCalled();
});

test('should handleRemoveExpenseConfirmation (no)', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(handleRemoveExpenseConfirmation).toHaveBeenCalled();
});