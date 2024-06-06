const users = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
];

let currentId = 2;

module.exports = {
  getUsers: () => users,
  addUser: (user) => {
    user.id = currentId++;
    const newUser = { id: user.id, ...user };
    users.push(newUser);
    return newUser;
  },
  getUser: (id) => users.find((user) => user.id === id),
  deleteUser: (id) => {
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);
    return users;
  },
  updateUser: (id, updatedUser) => {
    const index = users.findIndex((user) => user.id === id);
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  },
};
