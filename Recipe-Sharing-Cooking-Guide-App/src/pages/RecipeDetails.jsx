import { Link, useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );
  if (!recipe) {
    return (
      <section className="section">
        <h1>Recipe not found</h1>
        <Link to="/recipes">Back to Recipes</Link>
      </section>
    );
  }
  return (
    <section className="details-page">
      <div className="details-image">
        <img
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="details-content">
        <span className="category">
          {recipe.category}
        </span>
        <h1>{recipe.title}</h1>
        <p className="details-description">
          {recipe.description}
        </p>
        <div className="details-info">
          <span>⏱️ {recipe.time}</span>
          <span>👨‍🍳 {recipe.difficulty}</span>
          <span>🍽️ {recipe.servings} Servings</span>
        </div>
        <h2>🧂 Ingredients</h2>
        <ul className="ingredients">
          {recipe.ingredients.map(
            (ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            )
          )}
        </ul>
        <h2>👨‍🍳 Cooking Instructions</h2>
        <ol className="instructions">
          {recipe.instructions.map(
            (step, index) => (
              <li key={index}>
                {step}
              </li>
            )
          )}
        </ol>
        <Link
          to="/recipes"
          className="back-btn"
        >
          ← Back to Recipes
        </Link>
      </div>
    </section>
  );
}

export default RecipeDetails;