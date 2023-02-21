import axios from "axios";
import url from "./url";

export function logout() {
  const serverUrl = url.getServerApi(process.env.NODE_ENV);
  axios
    .get(serverUrl + "/auth/signout")
    .then((_) => {
      window.location.href = serverUrl + "/signin";
    })
    .catch((e: any) => {
      console.error(e);
    });
}
