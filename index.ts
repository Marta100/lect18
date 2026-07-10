//01)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.
// (npm i mongoose,npm i express) დასერჩეთ არარის ძაან რთული.
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectionString = process.env.MONGO_URL;

async function connectToMongo() {
    if (!connectionString) {
        console.error("MONGO_URL is not set. Please add it to the .env file.");
        return;
    }

    try {
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

void connectToMongo();
export { connectToMongo };

//2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და 
// აბრუნებს ტექსტს User Nika is 22 years old.
//const userName: string = "nika";
//const userAge: number = 22;
//const userInfo: string = `user ${userName} is ${userAge} years old`;
//console.log(userInfo);

//3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
//თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"
//interface IProduct {
 //   name: string;
 //   price: number;
 //   quantity: number;
//}
//const products: IProduct[] = [
 //  { name: "laptop", price: 10, quantity: 1 },
 //  { name: "phone", price: 20, quantity: 2 },
 // { name: "tablet", price: 30, quantity: 3 },
//];
//const totalPrice = products.reduce((tot, curr) => tot + (curr.price * curr.quantity), 0);
//console.log(`Total price: ${totalPrice}`);
//if (totalPrice > 100) {
 //   console.log("Discount available!");
//} else {
  //  console.log("No discount available!");
//}


//4)შექმენი ორი ინტერფეისი  IHero და ISuperHero.
//IHero უნდა აღწერდეს ჩვეულებრივი გმირის მონაცემებს:
//name: string - გმირის სახელი
//age: number - გმირის ასაკი.

//ISuperHero უნდა დაექსთენდდეს IHero-ით და დაამატოს:
//power: string - გმირის ძალა
//level?: string - optional ველი, რომელიც განისაზღვრება მოგვიანებით

//interface IHero {
  //  name: string;
  //  age: number;
//}
//interface ISuperHero extends IHero {
  //  power: string;
  //  level?: string;
//}
//function levelUp(hero: ISuperHero): void {
   // if (hero.age>30) {
   //     hero.level = "pro";
   // } else {
   //     hero.level = "newbie";
   // }
   // console.log(`${hero.name} is new level: ${hero.level}`);
//}


//5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
//function getFirstElement<T>(arr: T[]): T {
  //  return arr[0]!;
//}
//console.log(getFirstElement([1, 2, 3]));
//console.log(getFirstElement(["a", "b", "c"]));