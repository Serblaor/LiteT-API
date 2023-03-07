// const Rol = require ("./model/Roles.js");

// const createRoles = async () => {
//   try {
//     // Count Documents
//     const count = await Rol

//     // check for existing roles
//     if (count > 0) return;

//     // Create default Roles
//     const values = await Promise.all([
//       new Rol({ name: "user" }).save(),
//       new Rol({ name: "admin" }).save(),
//     ]);

//     console.log(values);
//   } catch (error) {
//     console.error(error);
//   }
// };
// module.exports = createRoles;