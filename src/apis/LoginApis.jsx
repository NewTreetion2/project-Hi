import axios from "axios";

export default function LoginApis() {
  async function LoginUser(id, password) {
    try {
      const res = await axios.post(`/api/vo/login`, {
        id: id,
        password: password,
      });
      return res.status;
    } catch (err) {
      return err;
    }
  }

  async function RegistUser(id, password, pwconfirm, name) {
    try {
      const res = await axios.post("/api/vo/register", {
        id: id,
        password: password,
        passwordConfirm: pwconfirm,
        name: name,
      });
      return res.status;
    } catch (err) {
      return err;
    }
  }

  return { LoginUser, RegistUser };
}
