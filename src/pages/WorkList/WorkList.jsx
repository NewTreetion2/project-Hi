import WorkApis from "apis/WorkApis";

import { MyCard } from "components";

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
