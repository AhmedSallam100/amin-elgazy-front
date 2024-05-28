import { useEffect, useState } from "react";
import MaterialPhoto from "./MaterialPhoto";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";

function SchoolBoards() {
  const [boardInfo, setBoardInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleBoard = async () => {
      try {
        const response = await axios.get(`/boards/${id}`);
        setBoardInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleBoard();
  }, []);

  const formattedDate = boardInfo
    ? formatDistanceToNowStrict(new Date(boardInfo.createdAt), { locale: ar })
    : "";

  return (
    <>
      <MaterialPhoto
        path={boardInfo?.image}
        text={boardInfo?.title || "امتحان البلاغة"}
        date={`منذ ${formattedDate}`}
      />
    </>
  );
}

export default SchoolBoards;
