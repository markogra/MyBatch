interface Ingredient {
  name:string;
  amount:number;
  unit:string;
}

interface IMalt extends Ingredient {
  type:'malt'
}

interface IHop extends Ingredient {
  type:'hop',
  time:string
}

interface IYeast extends Ingredient {
  type:'yeast'
}
interface IExtra extends Ingredient {
  type:'extra'
}

class Inventory {
  malts: IMalt[] = [];
  hops:IHop[] = [];
  yeasts:IYeast[] = [];
  extras:IExtra[] = []


  addIngredient(ingredient:IMalt | IHop | IYeast | IExtra){
    if(ingredient.type === 'malt') {
      this.malts.push(ingredient)
    }else if (ingredient.type === 'hop'){
      this.hops.push(ingredient)
    }else if (ingredient.type === 'yeast'){
      this.yeasts.push(ingredient)
    }else if (ingredient.type === 'extra'){
      this.extras.push(ingredient)
    }
    
  }

  getIngredientAmount(name:string): number {
    const malt = this.malts.find((ing) => ing.name === name);
    if (malt) return malt.amount;

    const hop = this.hops.find((ing) => ing.name === name);
    if (hop) return hop.amount;

    const yeast = this.yeasts.find((ing) => ing.name === name);
    if (yeast) return yeast.amount;

    const extra = this.extras.find((ing) => ing.name === name)
    if (extra) return extra.amount

    return 0; 
  }

  reduceIngredient(name:string, amount:number):boolean {
    const malt = this.malts.find((ing) => ing.name === name);
    if (malt && malt.amount >= amount) {
      malt.amount -= amount;
      return true;
    }

    const hop = this.hops.find((ing) => ing.name === name);
    if (hop && hop.amount >= amount) {
      hop.amount -= amount;
      return true;
    }

    const yeast = this.yeasts.find((ing) => ing.name === name);
    if (yeast && yeast.amount >= amount) {
      yeast.amount -= amount;
      return true;
    }

    const extra = this.extras.find((ing)=> ing.name === name);
    if(extra && extra.amount >= amount){
      extra.amount -= amount;
      return true
    }

    console.log(`Not enough ${name} in inventory.`);
    return false

  }
  listIngredients(): string {
    return `Malts: ${this.malts.length}, Hops: ${this.hops.length}, Yeasts: ${this.yeasts.length} Extras: ${this.extras.length}`;
  }
}

export default Inventory
