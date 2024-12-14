import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCqvWpIOQR4tYEYTe0_4HXez_AQ78wqwFc",
  authDomain: "pilvi-harjoitustyo.firebaseapp.com",
  projectId: "pilvi-harjoitustyo",
  storageBucket: "pilvi-harjoitustyo.firebasestorage.app",
  messagingSenderId: "1098429360465",
  appId: "1:1098429360465:web:3838d664c93a2f1f3acb70"
};

function LoginForm() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Tämä on esimerkkiviesti " + user.email);

      });
      // Kirjautuminen onnistui
    } catch (error) {
      // Kirjautuminen epäonnistui, näytä virheilmoitus käyttäjälle
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:  </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:  </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
