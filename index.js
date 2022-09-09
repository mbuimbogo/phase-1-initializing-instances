// Write your code here

class Breakfast{
    
    constructor(food, drink){
this.food = food;
this.drink = drink;
    }

}
const bfast = new Breakfast('eggs', 'juice') 
bfast.food;
bfast.drink;

class Lunch {

    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
    
    this.drink = drink;
    }
}
 const newlunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea")
 newlunch.soup;
 newlunch.salad;
 newlunch.drink;

 class Dinner {
    
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

 }
 const newdinner = new Dinner("balsamic salad", "consomme", "filet mignon", "cheesecake")
 newdinner.salad;
 newdinner.soup;
 newdinner.entree;
 newdinner.dessert;