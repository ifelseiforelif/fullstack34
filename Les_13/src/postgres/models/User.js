import { dbconfig } from "../dbconfig.js";
class User {
  async add_user(data) {
    const { login, email, password } = data;
    const user = await dbconfig.query(
      "INSERT INTO users(login, email, password) VALUES($1,$2,$3) RETURNING *",
      [data.login, data.email, data.password]
    );
    return user.rows[0].id;
  }
}

export default new User();