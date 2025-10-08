interface BirdInterface {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

const sparrow: BirdInterface = {
  name: "Sparrow",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

interface DogInterface extends BirdInterface {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
}

const Labrador: DogInterface = {
  name: "Toby",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 4,
};
