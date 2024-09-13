import axios from "axios";

export const getAllUsers = async () => {
  const res = await axios({
    method: "GET",
    url: "https://66e3c216d2405277ed11be8a.mockapi.io/users",
  });
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://66e3c216d2405277ed11be8a.mockapi.io/users",
    data: user,
  });
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `https://66e3c216d2405277ed11be8a.mockapi.io/users/${id}`,
  });
  return res.data;
};

export const updateUser = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `https://66e3c216d2405277ed11be8a.mockapi.io/users/${user.id}`,
    data: user,
  });
  return res.data;
};
