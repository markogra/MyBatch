import React from "react";
import styles from "./HomePage.module.css"

export default function Homepage() {
  return (
    <div className={styles['homepage-container']}>
      <h1 className={styles['homepage-title']}>Welcome to MyBatch Home Page</h1>
      <h2 className={styles['homepage-description']}>
        MyBatch is your ultimate homebrewing companion, designed to assist
        homebrewers with crafting their perfect brews and managing their
        ingredient stock.
      </h2>
      <div className={styles['p-container']}>
        <p>
          Explore a vast collection of recipes sourced from experienced
          homebrewers worldwide or create your own unique recipes from scratch.
          With MyBatch, the recipe creation process is simplified and
          streamlined.
        </p>
        <p>
          Seamlessly browse through a diverse range of hops, malts, yeasts, and
          more, and effortlessly add them to your inventory for easy tracking.
          MyBatch ensures you never run out of essential ingredients.
        </p>
        <p>
          Unlock your creativity with MyBatch's intuitive interface, where you
          can experiment with different beer styles, customize instructions, and
          fine-tune ingredient quantities to achieve the desired flavors and
          aromas.
        </p>
      </div>
    </div>
  );
}
