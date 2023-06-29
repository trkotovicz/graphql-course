const users = async (_obj, _arg, { getUsers }) => {
  const users = await getUsers();
  return users.json();
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

export const userResolvers = {
  Query: { user, users },
};
