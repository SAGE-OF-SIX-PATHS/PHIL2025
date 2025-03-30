import ScrollContext from "./context/ScrollContext";
import Router from "./routes/Router";

const App = () => {
  return (
    <ScrollContext>
      <Router />
    </ScrollContext>
  );
};

export default App;
