import { Link } from "react-router-dom";

function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-content">
        <span className="category">
          {recipe.category}
        </span>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-info">
          <span>⏱️ {recipe.time}</span>
          <span>👨‍🍳 {recipe.difficulty}</span>
        </div>
        <Link to={`/recipe/${recipe.id}`} className="view-btn">
        View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;