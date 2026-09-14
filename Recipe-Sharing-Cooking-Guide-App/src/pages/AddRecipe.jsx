import { useState } from "react";

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "Indian",
    time: "",
    description: ""
  });
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Recipe "${recipe.title}" added successfully!`
    );
    setRecipe({
      title: "",
      category: "Indian",
      time: "",
      description: ""
    });
  };
  return (
    <section className="section add-page">
      <div className="page-title">
        <span>SHARE YOUR RECIPE</span>
        <h1>Add New Recipe</h1>
        <p>
          Share your favorite recipe with the community.
        </p>
      </div>
      <form
        className="recipe-form"
        onSubmit={handleSubmit}
      >
        <label>
          Recipe Name
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter recipe name"
          value={recipe.title}
          onChange={handleChange}
          required
        />
        <label>
          Category
        </label>
        <select
          name="category"
          value={recipe.category}
          onChange={handleChange}
        >
          <option>Indian</option>
          <option>Italian</option>
          <option>Healthy</option>
          <option>Dessert</option>
        </select>
        <label>
          Cooking Time
        </label>
        <input
          type="text"
          name="time"
          placeholder="Example: 30 min"
          value={recipe.time}
          onChange={handleChange}
          required
        />
        <label>
          Description
        </label>
        <textarea
          name="description"
          placeholder="Write recipe description..."
          value={recipe.description}
          onChange={handleChange}
          required
        />
        <button type="submit">
          Add Recipe
        </button>
      </form>
    </section>
  );
}

export default AddRecipe;