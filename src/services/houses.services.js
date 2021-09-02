import http from "./base.services";
const getAll = async () => {
  var resp = {};
  try {
    const response = await http.get("/houses");
    // console.log(response);
    resp = response?.data;
  } catch (e) {
    resp = e.response.data ?? null;
  }
  return resp;
};

const destroy = async (id) => {
  var resp = {};
  try {
    const response = await http.delete(`/houses/${id}`);
    resp = response?.data;
  } catch (e) {
    resp = e.response.data ?? null;
  }
  return resp;
};

export const Houses = {
  getAll,
  destroy,
};
