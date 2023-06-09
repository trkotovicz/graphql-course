const users = () => {
  return [
    {
      id: '1',
      username: 'Thais 01',
    },
    {
      id: '2',
      username: 'Thais 02',
    },
    {
      id: '3',
      username: 'Thais 03',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    username: 'Thais',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
