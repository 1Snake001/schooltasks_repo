import { Thing } from "./thing.js";
import { Fleet } from "./fleet.js";

let fleet = new Fleet();

let responses = [false, false, true, true];

let things = [
  new Thing("Get milk"),
  new Thing("Remove the obstacles"),
  new Thing("Stand up"),
  new Thing("Eat lunch"),
];

fleet.add(things);

for(let i= 0; i < responses.length; i++){
    if(responses[i] == true){
        things[i].complete()
    }
};

// -  Van egy `Thing` osztályod
// -  Van egy `Fleet` osztályod
// - Ezen osztályokat használva érd el az alábbi kimenetet:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

console.log(fleet.toString());
