export class Product {
    public name : string;
    public price : number;
    public img : string;

    public setName (name: string) {
        this.name = name;
    }
    public setPrice (price: number) {
        this.price = price;
    }
    public setImg (img: string) {
        this.img = img;
    }
}