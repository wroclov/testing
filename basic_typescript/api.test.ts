// api.test.ts
import { fetchUser } from "./api";

test("fetchUser returns expected/correct data", async() => {
    const user = await fetchUser(78);
    expect(user).toEqual({ id: 78, name: "John Doe"});
    });

test("fetchUser throws error when id is invalid", async () => {
  await expect(fetchUser(-1)).rejects.toThrow("Invalid user ID");
});