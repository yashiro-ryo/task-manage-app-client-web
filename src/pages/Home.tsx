import React from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const { domainId, projectId } = useParams();
  return (
    <div>
      <h1>home page</h1>
      <span>domainId: {domainId}</span>
      <span>projectId: {projectId}</span>
    </div>
  );
}
