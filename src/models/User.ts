interface UserProps {
  name?: string;
  age?: number;
}
//type aliace
type Callback = () => void;
export class User {
  //new properrty to save our events name
  events: { [key: string]: Callback[] } = {}; //The property is initialized to an empty object.

  constructor(private data: UserProps) {}
  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); //the first argument is the object to be replaced
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
  }
}

// new User({ name: "sada", age: 23 });
