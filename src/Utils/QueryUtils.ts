import User from "../models/UserModel";
import QueryReturn from "./QueryReturn";

class QueryUtils {
  public UserInsertGenerate(user: User): QueryReturn {
    try {
      let userName: string | null | undefined = user.getName();
      let userEmail: string = user.getEmail();
      let userPassword: string = user.getPassword();
      let queryParameters: string[] = [];

      let sql: string = "INSERT INTO tb_user (";

      if (userName && userName.trim() !== "") {
        sql += "userName, ";
      }
      if (userEmail && userEmail.trim() !== "") {
        sql += "userEmail, ";
      } else {
        throw new Error("Invalid email.");
      }
      if (userPassword && userPassword.trim() !== "") {
        sql += "userPassword";
      } else {
        throw new Error("Invalid password.");
      }

      sql += ") VALUES (";

      if (userName && userName.trim() !== "") {
        sql += "?, ";
        queryParameters.push(userName);
      }
      if (userEmail && userEmail.trim() !== "") {
        sql += "?, ";
        queryParameters.push(userEmail);
      } else {
        throw new Error("Invalid email.");
      }
      if (userPassword && userPassword.trim() !== "") {
        sql += "?";
        queryParameters.push(userPassword);
      } else {
        throw new Error("Invalid password.");
      }
      sql += ");";

      return new QueryReturn(sql, queryParameters);
    } catch (error) {
      throw error;
    }
  }
}
export default QueryUtils;