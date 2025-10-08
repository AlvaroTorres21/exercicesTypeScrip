
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
    race: string;
    age: number;
}

const bulldog: DogInterface = {
  name: "Bulldog",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Bulldog",
  age: 4,
};

