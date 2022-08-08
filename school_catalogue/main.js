class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name (){
      return this._name
    }
    get level(){
      return this._level 
    }
    get numberOfStudents(){
      return this._numberOfStudents
    }
    quickFacts (){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      const num = Math.floor(Math.random() * substituteTeachers.length)
      console.log(num)
      return substituteTeachers[num]
    }
    set (newNumberOfStudents){
      if(typeof this._numberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
      
    }
  }
  
  
  class PrimarySchool extends School{
    constructor(name, pickupPolicy, numberOfStudents){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
      this._level = 'primary'
    }
    get pickupPolicy(){
      return this._pickupPolicy
    }
  }
  
  
  
  class HighSchool extends School{
    constructor(name, sportsTeam, numberOfStudents){
      super(name, 'high', numberOfStudents);
      this._sportsTeam = sportsTeam
    }
    get sportsTeam(){
      return this._sportsTeam
    }
    
  }
  class MiddleSchool extends School{
    constructor(name, majorSubjects, numberOfStudents){
      super(name, 'high', numberOfStudents);
      this._majorSubjects = majorSubjects
    }
    get majorSubjects(){
      return this._majorSubjects
    }
    
  }
  
  class SchoolCatalog {
    constructor(primary, middle, high){
      this._prmiary  = primary
      this._middle  = middle
      this._high = high
  
    }
    get primary (){
      return this._primary
    }
    get middle (){
      return this._middle
    }
    get high (){
      return this._high
    }
  }
  
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 514)

console.log(lorraineHansbury)
lorraineHansbury.quickFacts()
console.log(lorraineHansbury)
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith = new HighSchool('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track', 'Field'], 415)

console.log(alSmith)
console.log(alSmith.sportsTeam)


const jConnel = new MiddleSchool('Jamal Connel', ['Algebra', 'Quantum Physics', 'Literature'], 415)

console.log(jConnel)
console.log(jConnel.majorSubjects)

const schools = new SchoolCatalog(lorraineHansbury, alSmith, jConnel)

console.log(schools)