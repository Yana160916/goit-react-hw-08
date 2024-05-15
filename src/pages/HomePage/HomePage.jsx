import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 >Welcome to the Phonebook App</h1>
      <p className={styles.title}>This is the home page.</p>
    </div>
  );
};

export default HomePage;