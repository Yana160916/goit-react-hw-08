import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    setFormData({ email: '', password: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
      </label>
      <label className={css.label}>
        <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;