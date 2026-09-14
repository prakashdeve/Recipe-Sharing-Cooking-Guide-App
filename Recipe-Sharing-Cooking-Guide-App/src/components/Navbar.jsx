import { Link } from "react-router-dom";

function Navbar() {
  return(
    <nav className="navbar">
      <div className="nav-container">
      <Link to="/" className="logo">
      🍳 RecipeShare
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/add-recipe">Add Recipe</Link>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;