import React from "react";
import { Container } from "react-bootstrap";

export default function Signout() {
  return (
    <Container>
      <p>ログアウトしました。</p>
      <p>
        <a href="/signin">ログインする</a>
      </p>
    </Container>
  );
}
