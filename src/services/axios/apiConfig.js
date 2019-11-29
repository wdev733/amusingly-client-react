import axios from "axios"
import { serverUrl } from 'Constants/defaultValues'
import { getToken } from "./utility"

const getClient = auth => {
  const client = axios.create({ baseURL: serverUrl});

  if (auth) {
    client.defaults.headers.common = {
      Authorization: `Bearer ${getToken().accessToken}`
    }
  }

  return client;
};

export { getClient }
