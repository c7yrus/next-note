import Link from "next/link";

const Main = () => {
  const title = "NEXT";
  return (
    <div>
      {title}
      <br />
      <Link href="/notes">
        <a>{`Note`}</a>
      </Link>
      <br />
      <Link href="/notes/id">
        <a>{`Note Id`}</a>
      </Link>
    </div>
  );
};

export default Main;
