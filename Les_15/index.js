import pg from "pg";
const Pool = pg.Pool;

const dbconnect = new Pool({
  user: "postgres",
  password: "simple",
  host: "localhost",
  port: 5432,
  database: "node",
});

const user = dbconnect.query(
  "INSERT INTO users (login,email,password) VALUES ($1,$2,$3) RETURNING *",
  ["alex3", "alex3@gmail.com", "123"]
);
user
  .then((data) => {
    console.log(data.rows[0]);
  })
  .catch((err) => console.log(err));
