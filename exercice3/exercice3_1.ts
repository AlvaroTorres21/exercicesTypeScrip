import { BirdType } from "../exercice1/exercice1_1";

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
