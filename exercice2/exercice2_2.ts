import { BirdInterface } from "../exercice1/exercice1_2";

type AllowedRacesInterfaces = "Husky" | "Labrador" | "Chucho";

type RestrictedDogInterface = Omit<BirdInterface, "canFly"> & {
  canFly: false;
  race: AllowedRacesInterfaces;
  age: number;
};

const Labrador: RestrictedDogInterface = {
  name: "Toby",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 4,
};
