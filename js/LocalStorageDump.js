import { UserManager } from "./userManger.js";
const userManager = new UserManager();
try {
  userManager.addUser("user@example.com", "userpass", 0, 0);
  userManager.addUser("user1@example.com", "userpass", 1, 1);
  userManager.addUser("user2@example.com", "userpass", 2, 2);
  userManager.addUser("user3@example.com", "userpass", 3, 3);
} catch (error) {
  console.log(error.message);
}
