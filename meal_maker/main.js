const menu = {
    _meal: '',
    _price: 0,
    set createMeal (mealToCheck){
      if (typeof mealToCheck === 'string'){
        this._meal = mealToCheck
      }
    },
    set createPrice (priceToCheck){
      if (typeof priceToCheck  === 'number'){
        this._price = priceToCheck
      }
    },
    get todaysSpecial (){
      if (typeof this._meal === 'string' && typeof this._price === 'number'){
        return `Today’s Special is ${this._meal} for $${this._price}!`
      }else {
        return 'Meal or price was not set correctly!'
      }
    }
  }
  menu.createMeal = 'Bank and Tilapia'
  menu.createPrice = 9
  console.log(menu.todaysSpecial)