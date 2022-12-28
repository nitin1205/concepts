import "./App.css";
import Stars from "./Stars";

const App = () => {
  const stars = Stars();
  console.log(stars)

  return (
    <h1>
      Let's bring your &nbsp;
      <span className="magic">
        <Stars/>
        <span className="magic-text">
          ideas to life.
        </span>
      </span>
    </h1>
  );
};

export default App;
