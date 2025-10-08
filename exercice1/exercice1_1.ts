
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

type DogType = BirdType & { race: string, age: number }

const germanShepherd: DogType = {
  name: "German Shepherd",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false, 
  race: "German Shepherd",
  age: 5,
};
