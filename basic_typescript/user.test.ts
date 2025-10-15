// user.test.ts

import { User } from "./user";

test("should return true if user is an adult", () => {
    const user = new User("Bob", 22);
    expect(user.isAdult()).toBe(true);
    });