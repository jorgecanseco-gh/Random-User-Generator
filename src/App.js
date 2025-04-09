import styles from './App.module.css'
import React, { useState, useEffect } from 'react';

function App() {

  // Function to hold the user Data

const [userData, setUserData] = useState(null);

const getUserData = async () => {
  const url = 'https://randomuser.me/api/';
  const response = await fetch(url);

  try {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  } 
    const data = await response.json();
    setUserData(data.results[0]);
  } catch (error) {
    console.error('Error fetching user data:')
  }
}


useEffect(() => {
  getUserData();
 
}, [])


const handleClick = () => {
  getUserData();
}



  return (
    <>
        <h1>Random User Generator</h1>

    <main>
      <button
      onClick={handleClick}
      >
      Generate User
      </button>

      {userData && 
      <section className={styles.userCard}>
        <img src={userData.picture.large} />
        <h2>Name: {userData.name.first + " " + userData.name.last}</h2>
        <p>Email: {userData.email}</p>
        <p>Location: {userData.location.city + ", " + userData.location.country}</p>
      </section>}
    </main>
  </>

  );
}

export default App;
