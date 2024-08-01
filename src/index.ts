import { User } from "./models/User";

const newUser = new User({ name: "isacc", age: 3 });
newUser.set({ name: "newname" });
console.log(newUser);
console.log(newUser.get("name"));
