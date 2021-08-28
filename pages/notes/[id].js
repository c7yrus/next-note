import { useRouter } from "next/router";

const NoteId = () => {
  const router = useRouter();

  const { id } = router.query;

  const title = "Note Id";
  return <div>{`${title} - ${id}`}</div>;
};

export default NoteId;
