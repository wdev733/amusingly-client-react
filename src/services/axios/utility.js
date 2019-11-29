export function clearToken() {
  localStorage.removeItem("clientID");
  localStorage.removeItem("userName");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("fullName");
  localStorage.removeItem("email");
}

export function getToken() {
  try {
    const clientID = localStorage.getItem("clientID");
    const userName = localStorage.getItem("userName");
    const accessToken = localStorage.getItem("accessToken");
    const name = localStorage.getItem("fullName");
    const email = localStorage.getItem("email");

    return { clientID, userName, accessToken, name, email };

  } catch (err) {
    clearToken();
    return null;
  }
}