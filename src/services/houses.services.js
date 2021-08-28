import http from "./base.services";
const getAll = async () => {
  var resp = {};
  try {
    const response = await http.get("/houses");
    resp = response.data;
  } catch (e) {
    resp = e.resp.data ?? null;
  }
  return resp;
};

export const Houses = {
  getAll,
};
