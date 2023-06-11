import "./RecipesPages.css";

function MyRecipesPage() {
  return (
    <div className="container">
      <div className="first-half">
        <div className="my-recipes-form">
          <h2>Release creativity, create your own recipe</h2>
          <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Beer Style</label>
            <input type="text"></input>
          </form>
        </div>
        <div className="my-recipe-list">
          <h2>This is your recipe list</h2>
        </div>
      </div>
      <div class="my-recipe-details">
        <h1>Details of each recipe that is clicked on list</h1>
      </div>
    </div>
  );
}

export default MyRecipesPage;
