
type BirdType = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

const eagle: BirdType = {
  name: "Eagle",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

type DogType = BirdType & { race: "Husky" | "Labrador" | "Chucho", age: number }

const Husky: DogType = {
  name: "Kira",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false, 
  race: "Husky",
  age: 5,
};

type CatType = Pick<BirdType, "name" | "canSleep"> & {
    color: string;
};

const siameseCat: CatType = {
  name: "Siamese",
  canSleep: true,
  color: "Grey",
};

type SnakeType = Omit<BirdType, "name" | "canFly">;

const cobra: SnakeType = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};

