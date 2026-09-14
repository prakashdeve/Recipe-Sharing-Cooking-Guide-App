import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

function Recipes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    "Indian",
    "Italian",
    "Healthy",
    "Dessert"
  ];
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ||
      recipe.category === category;
    return matchesSearch && matchesCategory;
  });
  return (
    <section className="section recipes-page">
      <div className="page-title">
        <span>EXPLORE</span>
        <h1>All Recipes</h1>
        <p>
          Discover delicious recipes for every occasion.
        </p>
      </div>
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item ? "active" : ""
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))

        ) : (
          <div className="no-results">
            <h2>😔 No recipes found</h2>
            <p>Try another search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Recipes;