import { useState } from "react";
import "./InventoryPage.css";

function InventoryPage() {
  const [hopsQuantity, setHopsQuantity] = useState("");
  // functions to add ingridients(we are posting the topic to backend and update state)
  const addHops = () => {
    const hopsName = document.querySelector(".form-for-adding select").value;

    console.log(hopsName, hopsQuantity);
  };
  return (
    <div className="inventoryPage">
      <h1>Your Inventory</h1>
      <div className="row1">
        <div className="hops ingridients">
          <h2>Hops</h2>
          <div className="container-for-ul-and-form">
            <ul className="yourHops">
              <li>
                Saaz 24g <button>Delete</button>
              </li>
              <li>
                First Gold 12g <button>Delete</button>
              </li>
              <li>
                Fuggles 8g <button>Delete</button>
              </li>
            </ul>
            <div className="form-for-adding">
              <select className="hops-dd">
                <option value></option>
                <option value="Saaz">Saaz</option>
                <option value="First Gold">First Gold</option>
                <option value="Fuggles">Fuggles</option>
              </select>
              <br />
              <input
                type="text"
                placeholder="Quantity in grams"
                value={hopsQuantity}
                onChange={(e) => {
                  setHopsQuantity(e.target.value);
                }}
              ></input>
              <br />
              <button onClick={addHops}>Add</button>
            </div>
          </div>
        </div>
        <div className="malts ingridients">
          <h2>Malts</h2>
          <div className="container-for-ul-and-form">
            <ul className="yourmalts">
              <li>Munich 2.4kg</li>
              <li>Caramalt 3.2g</li>
              <li>Dark Crystal 1.8g</li>
            </ul>
            <div className="form-for-adding">
              <select>
                <option></option>
                <option>Munich</option>
                <option>Caramalt</option>
                <option>Dark Crystal</option>
              </select>
              <br />
              <input type="text" placeholder="Quatity in kg"></input>
              <br />
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
      {/* **************** */}
      <div className="row2">
        <div className="yeast ingridients">
          <h2>Yeast</h2>
          <div className="container-for-ul-and-form">
            <ul className="youryeast">
              <li>CL-0670 12g</li>
              <li>Y08 22g</li>
              <li>US-04 10g</li>
            </ul>
            <div className="form-for-adding">
              <select>
                <option></option>
                <option>CL-0670</option>
                <option>Y08</option>
                <option>US-04</option>
              </select>
              <br />
              <input type="text" placeholder="Quatity in grams"></input>
              <br />
              <button>Add</button>
            </div>
          </div>
        </div>
        <div className="Additions ingridients">
          <h2>Additional Ingredients</h2>
          <div className="container-for-ul-and-form">
            <ul className="yourmalts">
              <li>Cinnamon Stick 12g</li>
              <li>Ginger Root 23g</li>
              <li>Peach puree</li>
            </ul>
            <div className="form-for-adding">
              <select>
                <option></option>
                <option>Cinnamon Stick</option>
                <option>Ginger Root</option>
                <option>Peach puree</option>
              </select>
              <br />
              <input type="text" placeholder="Quatity in grams"></input>
              <br />
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;
