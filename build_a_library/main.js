class Media{
    constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    }
    get title(){
      return this._title
    }
    get isCheckedOut(){
      return this._isCheckedOut
    }
    get ratings(){
      return this._ratings
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut ? false : true
    }
    getAverageRating() {
    const sum = this._ratings.reduce( (prev, curr) =>   {
     return prev + curr 
    })
    return Math.round(sum/this._ratings.length)
    } 
    set isCheckedOut (condition){
      return this.isCheckedOut  = condition
    }
    addRating(newRating){
      this._ratings.push(newRating)
    }
  }
  
  class Book extends Media{
    constructor(title, name, page){
      super(title);
      this._author = name;
      this._pages  = page;
    }
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
  }
  class Movie extends Media{
    constructor(title, name, runtime){
      super(title);
      this._director = name;
      this._runtime = runtime
    }
    get director(){
      return this._director
    }
    get runtime(){
      return this._runtime
    }
  
  }
  
  class CD extends Media{
    constructor(title){
      super(title);
      this._songTitles = [];
    }
    get songTitles(){
      return this._songTitles
    }
    shuffleSongs() {
    return this._songTitles.sort(() => Math.random() - 0.5);
    }
    addNewSong(song){
      this._songTitles.push(song)
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly', 'Bill Bryson', 544)
  
  const speed = new Movie('Speed', 'Jan de Bont', 116)
  const summer = new CD('summer')
  
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  console.log(historyOfEverything)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  
  console.log(speed.getAverageRating())
  
  summer.addNewSong('Party Rock')
  summer.addNewSong('Ibiza')
  summer.addNewSong('Heartbreak Song')
  summer.addNewSong('Last Last')
  summer.addRating(1)
  summer.addRating(5)
  console.log(summer)
  summer.shuffleSongs()
  console.log(summer)