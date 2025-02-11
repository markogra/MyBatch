// import { useState } from "react";
// import { InputField, TextArea } from "./mui.js";
// import { postMyRecipe } from "../utils/ApiService.js";
// import IngFormMyRecipe from "./IngFormMyRecipe.js";

// const initialIngState = {
//   name: "",
//   quantity: "",
//   unit: "",
// };

// export default function CreateRecipeForm({
//   handleRecipeClick,
//   setMyRecipes,
//   allHops,
//   allMalts,
//   allYeast,
// }) {
//   const [beerName, setBeerName] = useState("");
//   const [beerStyle, setBeerStyle] = useState("");
//   const [instructions, setInstructions] = useState("");
//   const [ing, setIng] = useState({
//     hops: { ...initialIngState },
//     malts: { ...initialIngState },
//     yeast: { ...initialIngState },
//   });

//   const handleIngredientChange = (type, field, value) => {
//     setIng((prevIngredients) => ({
//       ...prevIngredients,
//       [type]: {
//         ...prevIngredients[type],
//         [field]: value,
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { hops, malts, yeast } = ing;

//     if (
//       !beerName ||
//       !beerStyle ||
//       !hops.name ||
//       !hops.quantity ||
//       !hops.unit ||
//       !malts.name ||
//       !malts.quantity ||
//       !malts.unit ||
//       !yeast.name ||
//       !yeast.quantity ||
//       !yeast.unit
//     ) {
//       alert("Please enter Beer name, Style, and all ingredient details.");
//       return;
//     }
//     if (
//       !Number(hops.quantity) ||
//       !Number(malts.quantity) ||
//       !Number(yeast.quantity)
//     ) {
//       alert("Please enter a number as Qty");
//       return;
//     }
//     console.log(hops.quantity, malts.quantity, yeast.quantity);
//     const amountForDBHops =
//       hops.unit === "kilograms" ? hops.quantity * 1000 : hops.quantity;
//     const amountForDBMalt =
//       malts.unit === "kilograms" ? malts.quantity * 1000 : malts.quantity;
//     const amountForDBYeast =
//       yeast.unit === "kilograms" ? yeast.quantity * 1000 : yeast.quantity;

//     const recipeData = {
//       name: beerName,
//       style: beerStyle,
//       instructions: instructions,
//       ingredients: {
//         hops: [{ name: hops.name, amount: amountForDBHops, unit: hops.unit }],
//         malts: [
//           { name: malts.name, amount: amountForDBMalt, unit: malts.unit },
//         ],
//         yeast: [
//           { name: yeast.name, amount: amountForDBYeast, unit: yeast.unit },
//         ],
//       },
//     };

//     try {
//       console.log(recipeData);
//       const savedRecipe = await postMyRecipe(recipeData);
//       setMyRecipes((prevRecipes) => [...prevRecipes, savedRecipe]);
//       resetForm();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   function resetForm() {
//     console.log("Reseting form");
//     setBeerName("");
//     setBeerStyle("");
//     setInstructions("");
//     setIng({
//       hops: { ...initialIngState },
//       malts: { ...initialIngState },
//       yeast: { ...initialIngState },
//     });
//   }
//   return (
//     <div className="my-recipes-form">
//       <h2 style={{ fontFamily: "cursive" }}>
//         Release creativity, create your own recipe
//       </h2>

//       <form onSubmit={handleSubmit} className="new-recipe-form">
//         <div className="left-side-createRecipe">
//           <div className="ing-row">
//             <InputField
//               value={beerName}
//               label="Name"
//               width="25ch"
//               onChange={(e) => {
//                 setBeerName(e.target.value);
//               }}
//             />
//             <InputField
//               value={beerStyle}
//               label="Beer Style"
//               width="25ch"
//               onChange={(e) => {
//                 setBeerStyle(e.target.value);
//               }}
//             />
//           </div>
//           <TextArea
//             placeholder="Add your instructions here"
//             value={instructions}
//             className="textarea"
//             onChange={(e) => {
//               setInstructions(e.target.value);
//             }}
//           />
//         </div>
//         <div className="right-side-createRecipe">
//           <h3>Ingredients</h3>
//           <IngFormMyRecipe
//             type="hops"
//             allHops={allHops}
//             name={ing.hops.name}
//             setName={(value) => handleIngredientChange("hops", "name", value)}
//             quantity={ing.hops.quantity}
//             setQuantity={(value) =>
//               handleIngredientChange("hops", "quantity", value)
//             }
//             unit={ing.hops.unit}
//             setUnit={(value) => handleIngredientChange("hops", "unit", value)}
//           />
//           <IngFormMyRecipe
//             type="malt"
//             allMalts={allMalts}
//             name={ing.malts.name}
//             setName={(value) => handleIngredientChange("malts", "name", value)}
//             quantity={ing.malts.quantity}
//             setQuantity={(value) =>
//               handleIngredientChange("malts", "quantity", value)
//             }
//             unit={ing.malts.unit}
//             setUnit={(value) => handleIngredientChange("malts", "unit", value)}
//           />
//           <IngFormMyRecipe
//             type="yeast"
//             allYeast={allYeast}
//             name={ing.yeast.name}
//             setName={(value) => handleIngredientChange("yeast", "name", value)}
//             quantity={ing.yeast.quantity}
//             setQuantity={(value) =>
//               handleIngredientChange("yeast", "quantity", value)
//             }
//             unit={ing.yeast.unit}
//             setUnit={(value) => handleIngredientChange("yeast", "unit", value)}
//           />

//           <button type="submit" className="create-recipe-btn">
//             Create Recipe
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
