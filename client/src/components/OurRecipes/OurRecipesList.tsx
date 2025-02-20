// export default function OurRecipesList({
//   allRecipes,
//   handleRecipeClick,
//   selectedRecipe,
// }) {
//   return (
//     <div className="recipe-list containers">
//       <h2>Some of our most popular recipes</h2>
//       <div className="scrollable-list">
//         {allRecipes && (
//           <ul className="ourRecipes">
//             {allRecipes.map((recipe) => (
//               <li
//                 key={recipe._id}
//                 onClick={() => handleRecipeClick(recipe)}
//                 className={selectedRecipe === recipe ? "active-recipe" : ""}
//               >
//                 <h3>{recipe.name}</h3>
//                 <p>{recipe.description}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
