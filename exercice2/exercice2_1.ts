
import { BirdType, DogType } from "../exercice1/exercice1_1";

type AllowedRaces = "Husky" | "Labrador" | "Chucho";

type allowedDogBreeds = Omit<DogType, "race"> & { race: AllowedRaces };

const Husky: allowedDogBreeds = {
  name: "Kira",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Husky", 
  age: 5,
};

