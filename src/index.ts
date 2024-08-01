import { User } from "./models/User";

const newUser = new User({ name: "isacc", age: 3 });
// newUser.set({ name: "newname" });

newUser.on("change", () => {});
console.log(newUser);
