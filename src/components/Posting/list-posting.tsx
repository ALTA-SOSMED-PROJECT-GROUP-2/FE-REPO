import { useEffect, useState } from "react";
import CardPosting from "./card-posting";
import { Posting } from "@/utils/apis/posting";
import { getPosting } from "@/utils/apis/posting/api";
import CardEdit from "./card-edit";

export default function ListPosting() {
  const [postings, setPostings] = useState<Posting[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getPosting();
      setPostings(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <CardEdit/>
      {postings.map((posting) => (
        <CardPosting data={posting} key={posting.id}/>
      ))}
    </div>
  );
}
