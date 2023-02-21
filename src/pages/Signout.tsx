import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { logout } from '../etc/logout'

export default function Signout() {
  let setupPrepaed = false;
  useEffect(() => {
    if (!setupPrepaed) {
      logout()
      setupPrepaed = true;
    }
  });
  return (
    <Container>
      <p>ログアウトしました。</p>
      <p>
        <a href="/signin">ログインする</a>
      </p>
    </Container>
  );
}
