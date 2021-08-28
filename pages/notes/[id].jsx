/** @jsxImportSource theme-ui */

export const getServerSideProps = async ({ params, req, res }) => {
  const response = await fetch(`${process.env.API_URL}/api/note`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
};

const NoteIds = ({ note }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {note.title} </h1>
    </div>
  );
};

export default NoteIds;
