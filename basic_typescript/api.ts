// api.ts

export async function fetchUser(id: number): Promise<{id: number; name: string}>{

    if (id < 0) {
    throw new Error("Invalid user ID");
    }

    // simulated "successful API response"
    return {id, name: "John Doe"};
    // in real example it would be aiming to return some API call
    // const response = await fetch(`https://api.example.com/users/${id}`);
    // return response.json();
    }
