import axios from "axios";

export default function WorkApis() {
  async function PostWork(formData) {
    try {
      const res = await axios.post(`/api/vo/post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res;
    } catch (err) {
      return err;
    }
  }

  async function GetWorkList(formData) {
    try {
      const res = await axios.get(`/api/vo/post`, {
        params: {
          mbNo: formData.get(`mbNo`),
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    } catch (err) {
      return err;
    }
  }

  async function GetWorkDetail(postNo) {
    try {
      const res = await axios.get(`/api/vo/post/${postNo}`);
      return res.data;
    } catch (err) {
      return err;
    }
  }

  return { PostWork, GetWorkList, GetWorkDetail };
}
