export class User {
    public name : string;
    public email : string;
    public password : string;
    public sex : string;

    public setName (name: string) {
        this.name = name;
    }
    public setEmail (email: string) {
        this.email = email;
    }
    public setPassword (password: string) {
        this.password = password;
    }
    public setSex (sex: string) {
        this.sex = sex;
    }
}