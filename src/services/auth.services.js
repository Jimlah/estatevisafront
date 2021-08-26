import http from "./base.services";

const login = async (formData) => {
  var resp = {};
  try {
    const response = await http.post("/login", formData);
    return response.data;
  } catch (error) {
    resp = error.response.data ?? null;
  }

  return resp;
};

const forgotPassword = async (formData) => {
  var resp = {};
  try {
    const response = await http.post("/forgot-password", formData);
    return response.data;
  } catch (error) {
    resp = error.response.data ?? null;
  }
  return resp;
};

export const Auth = {
  login,
  forgotPassword,
};
