import { useEffect, useState } from "react";
import MaterialPhoto from "../Blackboards/MaterialPhoto";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";

function SchoolSheets() {
  const [sheetInfo, setSheetInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleSheet = async () => {
      try {
        const response = await axios.get(`/sheets/${id}`);
        setSheetInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleSheet();
  }, []);

  const formattedDate = sheetInfo
    ? formatDistanceToNowStrict(new Date(sheetInfo.createdAt), { locale: ar })
    : "";

  return (
    <>
      <MaterialPhoto
        path={sheetInfo?.image}
        text={sheetInfo?.title || "امتحان البلاغة"}
        date={`منذ ${formattedDate}`}
      />
    </>
  );
}

export default SchoolSheets;
