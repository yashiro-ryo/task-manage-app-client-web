import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";
import Signout from "./pages/Signout";
import { User } from "firebase/auth";
import { auth } from "./firebase";

export const UserContext = createContext<{ user: User | null }>({ user: null });

function App() {
  const [user, setUser] = useState<User | null>(null);

  const values = {
    user,
  };

  // 参考: https://reffect.co.jp/react/react-firebase-auth#Context
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={values}>
          <Navbar />
          <Routes>
            <Route path="/home/:projectId" element={<Home />} />
            <Route path="/home" element={<Projects />} />
            <Route path="/signout" element={<Signout />} />
            {/* 上記以外は/homeにリダイレクトするようにする */}
            <Route path="*" element={<Root />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
