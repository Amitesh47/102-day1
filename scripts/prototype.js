// var animal = {
//     walk : 'true',
// };

// var rabbit = {
//     longEars : 'true',
// }

// rabbit.__proto__ = animal;

// console.log(rabbit.walk);

let user = {
    name: 'john',
    surname: 'Smith',
    
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__ : user,
    isAdmin: true
};

console.log(admin.fullName);
admin.fullName = "Amitesh ranjan";
// console.log(admin.fullName);
// console.log(user.fullName);