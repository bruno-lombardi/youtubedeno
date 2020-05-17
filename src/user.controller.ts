import { Router } from "https://deno.land/x/oak/mod.ts";
import db from "./db.ts";

const router = new Router();

router
  .get("/users", async (context) => {
    try {
      context.request.url.searchParams
      const result = await db.query({
        text: 'SELECT * FROM "user";',
      });
      context.response.body = result.rowsOfObjects();
    } catch (err) {
      console.log(err);
      context.throw(err);
    }
  })
  .get("/users/:id", async (context) => {
    if (context.params && context.params.id) {
      const result = await db.query({
        text: 'SELECT * from "user" WHERE id = $1;',
        args: [context.params.id],
      });
      context.response.body = result.rowsOfObjects()[0];
    }
  })
  .post("/users", async (context) => {
    if (context.request.hasBody) {
      try {
        const body = await context.request.body({
          contentTypes: {
            text: ["application/javascript"],
          },
        });
        const data = body.value;
        const result = await db.query({
          text:
            'INSERT INTO "user" ("displayName", email, password) VALUES ($1, $2, $3) RETURNING *;',
          args: [data.displayName, data.email, data.password],
        });
        context.response.body = result.rowsOfObjects()[0];
      } catch (err) {
        console.log(err);
        context.throw(err);
      }
    }
  })
  .put("/users/:id", async (context) => {
    try {
      if (context.params && context.params.id) {
        const id = context.params.id;

        const body = await context.request.body({
          contentTypes: {
            text: ["application/javascript"],
          },
        });
        const data = body.value;
        const result = await db.query({
          text:
            'UPDATE "user" SET "displayName" = $2, email = $3, password = $4 WHERE id = $1 RETURNING *;',
          args: [id, data.displayName, data.email, data.password],
        });
        context.response.body = result.rowsOfObjects()[0];
      }
    } catch (err) {
      console.log(err);
      context.throw(err);
    }
  }).delete('/users/:id', async (context) => {
    if (context.params && context.params.id) {
      const { id } = context.params;
      const result = await db.query({
        text:
          'DELETE FROM "user" WHERE id = $1 RETURNING id;',
        args: [id,],
      });
      if (result.rows.length) {
        context.response.status = 204;
      }
    }
  });

export default router;
