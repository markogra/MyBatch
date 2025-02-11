// export default function YourRecipeDetails({ selectedRecipe }) {
//   return (
//     <div class="my-recipe-details">
//       <h1>Details</h1>
//       {selectedRecipe && (
//         <div>
//           <h2>
//             {selectedRecipe.name}({selectedRecipe.style})
//           </h2>

//           <h3>Ingredients:</h3>
//           <ul>
//             {selectedRecipe.ingredients.hops.map((hop, index) => (
//               <li key={index}>
//                 {hop.name}:{" "}
//                 {hop.unit === "grams" ? hop.amount : hop.amount / 1000}{" "}
//                 {hop.unit === "grams" ? "g" : "kg"}
//               </li>
//             ))}
//             {selectedRecipe.ingredients.malts.map((malt, index) => (
//               <li key={index}>
//                 {malt.name}:{" "}
//                 {malt.unit === "grams" ? malt.amount : malt.amount / 1000}{" "}
//                 {malt.unit === "grams" ? "g" : "kg"}
//               </li>
//             ))}
//             <li>
//               Yeast: {selectedRecipe.ingredients.yeast[0].name}:{" "}
//               {selectedRecipe.ingredients.yeast[0].unit === "grams"
//                 ? selectedRecipe.ingredients.yeast[0].amount
//                 : selectedRecipe.ingredients.yeast[0].amount / 1000}{" "}
//               {selectedRecipe.ingredients.yeast[0].unit === "grams"
//                 ? "g"
//                 : "kg"}
//             </li>
//           </ul>
//           <h3>Instructions:</h3>
//           <p>{selectedRecipe.instructions}</p>
//         </div>
//       )}
//     </div>
//   );
// }
