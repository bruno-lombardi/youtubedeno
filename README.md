<h1 align="center">
    Deno Simple API
</h1>

<p align="center">
  <a href="#zap-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ok_man-author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

This is a proof of concept project, built for educational purposes, where we use Deno to build an REST API.
The main features are dealing with CRUD operations on a user table in a PostgreSQL database.

## :zap: Getting started

Install and run a local PostgreSQL database, create a new database and run the SQL inside [db.sql](src/db.sql) to create the tables. Then change the configuration inside [db.ts](src/db.ts) to your local connection.

Make sure you have Deno installed, then run `deno run --allow-net src/app.ts`.

## :ok_man: Author
| ![Bruno Lombardi](https://avatars2.githubusercontent.com/u/7153294?s=150&v=4)|
|:---------------------:|
|  [Bruno Lombardi](https://github.com/bruno-lombardi)   |

## :memo: License

This project has no license, :D.
