/** @jsxImportSource theme-ui */
import Link from "next/link";

export const getServerSideProps = async () => {
  //probably a good idea to get the URL from Headers or from environmental variable from next config. Will change later.
  const res = await fetch("http://localhost:3000/api/note/");
  const { data } = await res.json();
  return {
    props: {
      notes: data,
    },
  };
};

const Notes = ({ notes }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
