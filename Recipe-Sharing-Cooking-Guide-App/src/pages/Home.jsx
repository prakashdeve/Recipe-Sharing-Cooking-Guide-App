import { Link } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

function Home() {
  return(
    <>
    <section className="hero">
      <div className="hero-content">
        <span className="hero-small">
          WELCOME TO RECIPE SHARE
        </span>
        <h1>
          Discover Delicious Recipes
        </h1>
        <p>
          Find easy, tasty and healthy recipes.
          Learn how to cook your favorite dishes
          step by step
        </p>
        <Link to="/recipes" className="hero-btn">
        Explore Recipes →
        </Link>
      </div>
    </section>
    <section className="section">
      <div className="section-heading">
        <div>
          <span>OUR COLLECTION</span>
          <h2>Popular Recipes</h2>
        </div>
        <Link to="/recipes">
        View All →
        </Link>
      </div>
      <div className="recipe-grid">
        {recipes.slice(0,5) .map((recipe) => (
          <RecipeCard
          key={recipe.id}
          recipe={recipe}
          />
        ))}
      </div>
    </section>
    </>
  );
}

export default Home;