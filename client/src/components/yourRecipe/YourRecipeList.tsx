// export default function YourRecipeList({ allMyRecipes, setSelectedRecipe }) {
//   return (
//     <div className="my-recipe-list">
//       <h2>Your recipe list</h2>
//       <ul className="my-recipes">
//         {allMyRecipes &&
//           allMyRecipes.map((recipe) => (
//             <li
//               className="your-list-li"
//               key={recipe._id}
//               onClick={() => setSelectedRecipe(recipe)}
//             >
//               <span className="my-recipe-name">
//                 {recipe.name}
//                 <br />
//               </span>
//               <span className="my-recipe-style">{recipe.style}</span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
