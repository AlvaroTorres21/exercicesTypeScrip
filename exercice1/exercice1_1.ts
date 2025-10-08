
type BirdType = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

type DogType = BirdType & { race: string, age: number }
