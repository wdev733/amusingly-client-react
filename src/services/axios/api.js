import { getClient } from './apiConfig'

const loginAPI = (username, password) => {
  return getClient(false).post("/api/client/login", {
    username: username,
    password: password
  })
}

const instaImagesAPI = () => {
  return getClient(true).get("/api/instagram/images")
}

const updateImageStatusAPI = (instaId, status) => {
  return getClient(true).post("/api/instagram/status", {
    insta_id: instaId,
    status
  })
}

const widgetListAPI = () => {
  return getClient(true).get("/api/widget/list")
}

const widgetAddAPI = (widget) => {
  return getClient(true).post("/api/widget/add", widget);
};

const widgetUpdateAPI = widget => {
  return getClient(true).post("/api/widget/update", widget);
};

const widgetGetAPI = embed_id => {
  return getClient(true).get("/api/widget/w/" + embed_id);
};

export {
  loginAPI,
  instaImagesAPI,
  updateImageStatusAPI,
  widgetListAPI,
  widgetAddAPI,
  widgetUpdateAPI,
  widgetGetAPI
};