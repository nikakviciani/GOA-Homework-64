class Accaunt {
    Accaunts=0
    constructor(fname, lastname, age,email) {
        
        this.fname = fname;
        this.lastname = lastname;
        this.age = age;
        this.email=email
        Accaunts +=1
    }
}
let nika=new Accaunt('nika','kviciani',15,'kk@gmail.com')

//extends მემკვიდრეობა

class boss extends Accaunt{

}