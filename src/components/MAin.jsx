export default function Main() {
  const ingredients = [
    "oregano",
    "basil",
    "chives",
    "dill",
    "bay leaves",
    "mint",
    "parsley",
  ];

  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient} className="ingredient-item">
      {ingredient}
    </li>
  ));


  // serna 3end props vs state 5h:13:40

  
  function handleSubmit(event) {
    event.preventDefault(); //PREVENT THE BROWSER FROM REFRESHING THE PAGE
    const formData = new FormData(event.currentTarget); //GET THE FORM DATA
    const newIngredient = formData.get("ingredient"); //GET THE VALUE OF THE INPUT FIELD
    ingredients.push(newIngredient); //add the new ingredient to the array
    console.log(ingredients);
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="Add-Ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          className="search-bar"
          name="ingredient"
        />
        <button type="submit" className="search-button">
          Add Ingredient
        </button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
