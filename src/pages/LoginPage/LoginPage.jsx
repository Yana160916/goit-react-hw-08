import DocumentTitle from '../../components/DocumentTitle.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.Login}>
      <h1>Log In</h1>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
}