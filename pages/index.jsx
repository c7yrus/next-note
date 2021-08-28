/** @jsxImportSource theme-ui */

export const getStaticProps = () => {
  return {
    props: {
      content: {
        title: "This is a note app",
      },
    },
  };
};

const App = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

export default App;
