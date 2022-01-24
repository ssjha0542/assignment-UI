import "./styles.css";
import axios from "axios";
export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Search your Books</h1>
        <form>
          <div class="form-group">
            <input
              type="text"
              className="form-control mt-8"
              placeholder="Search books here"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-info">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
