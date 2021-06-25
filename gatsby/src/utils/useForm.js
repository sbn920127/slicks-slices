import { useState } from 'react';

export default function useForm(defaultValue) {
  const [values, setValues] = useState(defaultValue);

  function updateValue(e) {
    // check if its a  number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
