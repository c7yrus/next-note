import Link from "next/link";

const NoteIndex = () => {
  const title = "Note Index Path";
  return (
    <div>
      {title}
      <br />
      <Link href="/notes/[id]" as={"notes/1"}>
        <a>{`Note 1`}</a>
      </Link>
    </div>
  );
};

export default NoteIndex;
