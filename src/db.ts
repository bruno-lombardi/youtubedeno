import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "docker",
  database: "deno",
  hostname: "localhost",
  port: 25432,
  password: "AO1cVa1kl321",
});

await client.connect();

export default client;
