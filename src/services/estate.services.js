import http from "./base.services";
const getAll = async () => {
  var resp = {};
  try {
    const response = await http.get("/estates");
    resp = response.data;
  } catch (e) {
    resp = e.response.data ?? null;
  }
  return resp;
};

const destroy = async (id) => {
  var resp = {};
  try {
    const response = await http.delete("/estates/" + id);
    resp = response?.data;
  } catch (e) {
    resp = e.response?.data ?? null;
  }
  return resp;
};

export const Estate = {
  getAll,
  destroy,
};
