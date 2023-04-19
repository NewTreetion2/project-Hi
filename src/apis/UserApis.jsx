import axios from "axios";

export default function UserApis() {
  async function SignInUser(id, password) {
    try {
      const res = await axios.post(`/api/vo/login`, {
        id: id,
        password: password,
      });
      return res.data;
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

  async function SignInUserData(id) {
    try {
      const res = await axios.get(`/api/vo/member/${id}`);

      return res.data;
    } catch (err) {
      throw err;
    }
  }

  async function ChangeProfileImg(formData) {
    try {
      const res = await axios.put(`/api/vo/member`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res;
    } catch (err) {
      throw err;
    }
  }

  async function GetProfileImg(mbNo) {
    try {
      const res = await axios.get(`/api/vo/member/profile/${mbNo}`);

      return res.data;
    } catch (err) {
      throw err;
    }
  }

  return {
    SignInUser,
    RegistUser,
    SignInUserData,
    ChangeProfileImg,
    GetProfileImg,
  };
}
