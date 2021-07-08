import {useState} from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return [formData, handleChange];
};
