function getServerApi(env: "development" | "production" | "test" | undefined) {
  if (env === "development") {
    return "http://localhost:5050";
  } else if (env === "test") {
    return "http://localhost:5050";
  } else if (env === "production") {
    return "http://160.251.45.134";
  } else {
    return "http://localhost:5050";
  }
}

export default {
  getServerApi,
} as const;
