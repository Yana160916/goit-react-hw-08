import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.Register}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;