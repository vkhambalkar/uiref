// Form.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, MenuItem } from '@material-ui/core';

// Define the options for the dropdown
const dropdownOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Form: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  const dispatch = useDispatch();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Dispatch an action with the form data
    dispatch({ type: 'SUBMIT_FORM', payload: { option: selectedOption, text: textInputValue } });

    // Reset form fields
    setSelectedOption('');
    setTextInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          select
          label="Select an option"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {dropdownOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          label="Text input"
          value={textInputValue}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
