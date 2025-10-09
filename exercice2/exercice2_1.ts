
import { BirdType, DogType } from "../exercice1/exercice1_1";

type AllowedRacesType = "Husky" | "Labrador" | "Chucho";

type AllowedDogBreeds = Omit<DogType, "race"> & { race: AllowedRacesType };

const Husky: AllowedDogBreeds = {
  name: "Kira",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Husky", 
  age: 5,
};
