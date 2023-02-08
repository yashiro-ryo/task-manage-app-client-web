import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return <></>;
}
