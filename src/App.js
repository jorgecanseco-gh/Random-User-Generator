import styles from './App.module.css'

function App() {
  return (
    <>
        <h1>Random User Generator</h1>

    <main>
      <button>Generate User</button>

      <section className={styles.userCard}>
        <img src="https://via.placeholder.com/150" />
        <h2>Name: John Doe</h2>
        <p>Email: johndoe@example.com</p>
        <p>Location: New York, USA</p>
      </section>
    </main>
  </>

  );
}

export default App;
