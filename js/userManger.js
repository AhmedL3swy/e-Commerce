import { User } from "./User.js";

/**
 * Class representing a user manager.
 * @class
 * @author AhmedL3swy
 */
class UserManager {
  /**
   * Create a user manager.
   * @constructor
   */
  constructor() {
    this.users = [];
    this.retrieveUsers();
  }

  /**
   * Add a user to the array.
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @param {number} id - The ID of the user.
   * @param {string} accountType - The account type of the user.
   * @returns {User} The added user.
   * @throws {Error} If the user already exists.
   */
  addUser(email, password, id, accountType) {
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const user = new User(email, password, id, accountType);
    this.users.push(user);
    this.storeUsers();
    return user;
  }

  /**
   * Store users in Local Storage.
   */
  storeUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  /**
   * Retrieve users from Local Storage.
   */
  retrieveUsers() {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    this.users = storedUsers.map(
      (user) => new User(user.email, user.password, user.id, user.accountType)
    );
  }

  /**
   * Log user data.
   */
  logUserData() {
    if (this.users.length > 0) {
      this.users.forEach((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`Email: ${user.email}`);
        console.log(`Password: ${user.password}`);
        console.log(`ID: ${user.id}`);
        console.log(`Account Type: ${user.accountType}`);
        console.log("----------------------");
      });
    } else {
      console.log("No users found.");
    }
  }
}

export { UserManager };
