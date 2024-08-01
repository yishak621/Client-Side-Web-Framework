interface UserProps {
  name?: string;
  age?: number;
}
//type aliace
type Callback = () => {};
export class User {
  constructor(private data: UserProps) {}
  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); //the first argument is the object to be replaced
  }

  on(eventName: string, callback: Callback) {}
}

// new User({ name: "sada", age: 23 });
