class User {
    name : String;
    email :String;
    age :number;

        constructor (name:String , email:String , age : number){
            this.name = name;
            this.email = email;
            this.age = age;

            console.log(`my name is ${this.name} and my Email is ${this.email} and my Age is ${this.age} `);

        }
}


let newUser = new User('shashi' , 'shashikunal@gmail.com' , 33);
let newUser1 = new User('shashi1' , 'shashikunal1@gmail.com' , 33);

