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

const getById = async (id) => {
  var resp = {};
  try {
    const response = await http.get(`/estates/${id}`);
    resp = response.data;
  } catch (e) {
    resp = e.response.data ?? null;
  }
  return resp;
};

const create = async (data) => {
  var resp = {};
  try {
    const response = await http.post("/estates", data);
    resp = response.data;
  } catch (e) {
    resp = e.response.data ?? null;
  }
  return resp;
};

const update = async (id, data) => {
  var resp = {};
  try {
    const response = await http.put(`/estates/${id}`, data);
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
  getById,
  create,
  update,
  destroy,
};
