class person{
    static species = "human"

    constructor(name, age, hobby, weight){
        this.name=name
        this.age=age
        this.hobby=hobby

        if(weight){
            this.weight = weight
        }
        
        
    }
    introduce() {
        console.log(`Hello m name is ${this.name}.I am ${this.age} years old.And i love ${this.hobby}`)
    }

    set changename(newName){
        this.name = newName;
    }

    get personName(){
        return this.name
    }

}

const person1 = new person("mohamed", 19, "coding")
const person2 = new person("mohamed2", 20, "coding2", 60)

person1.name = "Udo"
person1.introduce();
console.log(person1.name)
console.log(person2.name)