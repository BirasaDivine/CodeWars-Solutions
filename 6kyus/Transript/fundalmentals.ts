// export var var1Boolean: boolean = true;
// export var var2Decimal: number = 13;
// export var var3Hex: number = 0xf00d;
// export var var4Binary: number = 0b111111;
// export var var5Octal: number = 0o744;
// export var var6String: string = 'Hello, world!';
// export var var7Array: [number, string, {a:number}, number, number] = [1, 'test', {a: 3}, 4, 5];
// export var var8NumericArray: number[] = [1, 2, 3, 4, 5];
// export var var9Tuple: [string, number] = ['key', 12345];
// // enum
// export enum Color {Red = 1, Green = 2, Blue = 4}
// export var var10Enum: Color = Color.Blue;
// export var var11ArrayOfAny: any[]= [1, 'test', {a: 3}, 4, 5];
// export var var12VoidFunction = (): void => {};
// export var var13Null: null = null;
// export var var14Undefined: undefined = undefined;
// export var var15NeverFunction = (): never => { throw new Error("This function never returns");};



// const you : object ={
//     userName : "Bobby",
//     isReturning : "true",
// }
// console.log(you.userName)   

// let  age=35;


// function addNumber(a,b){
//     return a+b
// }
// console.log(addNumber("5","6"))


// function isString(value:unknown):boolean{
//     return typeof value === "string"
// }
// console.log(isString(12))


// class Bank{
//      readonly id:number;
//     owner:string;
//     private _balance:number;
//     nickName ?:string;
//     constructor( id:number,owner:string,balance:number,nickName ?:string){
//         this.id=id;
//         this._balance=balance
//         this.owner=owner;
//         this.nickName=nickName
//     }
//     displayInfo():void{
//         console.log(`ID: ${this.id}, Owner: ${this.owner}, Balance: ${this.balance}, Nickname: ${this.nickName ?? "None"}`)
//     }
// }
// let firstUser= new Bank(1,"Birasa Divine",100)
// console.log(firstUser.balance)
// firstUser.displayInfo()

// class seatAssignment{
//     [seatNumber : string] :string
// }
// let seats=new seatAssignment()
// seats.A1="Birasa"
// seats.A2="Divine"
// console.log(seats)

// class keyValuePair<T , U>{
//     constructor(public key:T,public value:U){}
// }
// let firstValue=new keyValuePair("stro","Divine")
// firstValue.key

// interface User{
//     names:string,
//     age:number,
//     occupation:string
// }
// interface Admin{
//     names:string,
//     age:number,
//     role:string
// }
// type Person= User | Admin

// const persons:Person[]=[
//     {
//         names:"Divine",
//         age:20,
//         occupation:"Manager"
//     },
//     {
//         names:"Bruno",
//         age:21,
//         role:"Software Developer"
//     }
// ]
// function logUsers(person:Person){
//     let additionalInformation :string;
//     if(isAdditionalInformation(person)){
//          additionalInformation=person.role
//     } else{
//         additionalInformation=person.occupation
//     }
   
//     console.log(`${person.names},${person.age},${additionalInformation}`)
// }
// function isAdditionalInformation(person : Person):person is Admin{
//     return("role" in person)
// }

// console.log("Users:")
// persons.forEach(logUsers)



// Task: Create a mapped type PartialWithExceptions<T, K> 
// such that all properties in T are optional except those in union K, which stay required.

// interface Config {
//   host: string;
//   port: number;
//   timeout: number;
// }

// type User = {
//     name: string,
//     age: number
// }

// type OptionalUser = {
//     [K in keyof Config]: Config[K]
// }
// type NewConfig = {
//     [K in keyof Config]: Config[K]
// }

// type PartialWithExceptions<T, K extends keyof T> = {
//     [key in keyof T]?: T[key]
// }

// type PartialUser = Partial<User>
// type OptionalUser = PartialWithExceptions<Config, "host" | "ffsfadfsadf">

// type Omitted = Omit<Config, "host" | "port">

// type HostUnion = "host" | "port"

// host must be present; port and timeout are optional



// abstract class Shape2D{
//     abstract area(number:number):number;
// }
// class Circle extends Shape2D{
//     radius:number;
//     constructor(radius:number){
//         super();
//         this.radius=radius
//     }
//     area(number: number): number {
//         return Math.PI * this.radius * this.radius
//     }
// }
// type Notifications = 
//   | { type: 'email'; to: string; subject: string; }
//   | { type: 'sms'; to: string; phone: string; }
//   | { type: 'push'; to: string; deviceId: string; };
// function sendNotification(n:Notifications): void{

//     switch(n.type){
//         case('push'):
//             console.log(n.deviceId)
//     }
// }


// function separateTypes(array:(number|string)[]):{strings:string[], numbers: number[]}{
//     const numbers = array.filter(element =>{
//         typeof element == "number";
//     })
//     const strings = array.filter(element =>{
//         typeof element == "string";
//     })
//     return {strings:strings as string[], numbers:numbers as number[]}
// }


function separateTypes(array:(number|string)[]):{strings:string[],numbers:number[]}{
    const strings:string[] = []
    const numbers:number[] = [];
    for( let elements of array){
        if(typeof elements === "string"){
            strings.push(elements)
        }else{
            numbers.push(elements)
        }
    }
    return {strings:strings,numbers:numbers}
}
console.log(separateTypes([1, "hello", 2, "world", 3]))