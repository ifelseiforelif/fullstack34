import { dbconfig } from "../dbconfig.js";
import bcrypt from "bcrypt";
class User {
  async add_user(data) {
    const { login, email, password } = data;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const user = await dbconfig.query(
      "INSERT INTO users(login, email, password) VALUES($1,$2,$3) RETURNING *",
      [data.login, data.email, hash]
    );
    return user.rows[0].id;
  }

  async get_user(data) {
    const { login, password } = data;
    const user = await dbconfig.query("SELECT * FROM users WHERE login=$1", [
      login,
    ]);
    const hash = user.rows[0].password;
    if (bcrypt.compareSync(password, hash)) {
      return user;
    }
  }

  async get_all_users() {
    return await dbconfig.query("SELECT * FROM users", []);
  }
}

export default new User();
