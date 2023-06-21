import React from "react";
import CallToAction from "../components/CallToAction";
import "./HomePage.css";

function Homepage() {
  return (
    <div className="homepage-container" data-testid="homepage-container">
      <div className="title">
        <img
          className="title-img"
          src={require("../Images/Title.png")}
          alt="Homebrewing beer"
        />
        <h1 className="homepage-title">Welcome to MyBatch Home Page</h1>
        <h2 className="homepage-description">
          MyBatch is your ultimate homebrewing companion, designed to assist
          homebrewers with crafting their perfect brews and managing their
          ingredient stock.
        </h2>
      </div>
      <div className="call_to_action_row">
        <CallToAction route="/how-to-brew" text="Learn How To Brew" />
        <CallToAction route="/our-recipes" text="Check Out Recipes" />
      </div>
      <div className="first">
        <p>
          Explore a vast collection of recipes sourced from experienced
          homebrewers worldwide or create your own unique recipes from scratch.
          With MyBatch, the recipe creation process is simplified and
          streamlined.
        </p>
        <img
          className="first-p-img"
          src={require("../Images/Brewing.png")}
          alt="Brewing kit"
        />
      </div>
      <div className="second">
        <img
          className="second-p-img"
          src={require("../Images/Bottles.png")}
          alt="Bottles"
        />
        <p className="second">
          Seamlessly browse through a diverse range of hops, malts, yeasts, and
          more, and effortlessly add them to your inventory for easy tracking.
          MyBatch ensures you never run out of essential ingredients.
        </p>
      </div>
      <div className="third">
        <p>
          Unlock your creativity with MyBatch's intuitive interface, where you
          can experiment with different beer styles, customize instructions, and
          fine-tune ingredient quantities to achieve the desired flavors and
          aromas.
        </p>
        <img
          className="third-p-img"
          src={require("../Images/Ingredients.png")}
          alt="Ingredients"
        />
      </div>
    </div>
  );
}

export default Homepage;
