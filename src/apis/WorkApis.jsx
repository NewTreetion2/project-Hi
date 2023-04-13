import axios from "axios";

export default function WorkApis() {
  async function PostWork(
    title,
    mbNo,
    content,
    registrationDate,
    closingDate,
    price,
    recordingPlace,
    useYn
  ) {
    try {
      const res = await axios.post(`api/vo/post`, {
        title: `${title}`,
        mbNo: `${mbNo}`,
        content: `${content}`,
        registrationDate: `${registrationDate}`,
        closingDate: `${closingDate}`,
        price: `${price}`,
        recordingPlace: `${recordingPlace}`,
        useYn: useYn,
      });
      return res.status;
    } catch (err) {
      return err;
    }
  }

  async function GetWorkList() {
    try {
      const res = await axios.get(`api/vo/post`);
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async function GetWorkDetail(workNumber) {
    try {
      const res = await axios.get(`api/vo/post/${workNumber}`);
      return res.data;
    } catch (err) {
      return err;
    }
  }
  return { PostWork, GetWorkList, GetWorkDetail };
}
