import WorkApis from "apis/WorkApis";

export default function WorkList() {
  const { GetWorkList, GetWorkDetail } = WorkApis();
  const getWorkData = async () => {
    const res = await GetWorkDetail(1);
    console.log(res);
  };

  const getWorkList = async () => {
    const res = await GetWorkList();
    console.log(res);
  };

  getWorkList();
}
