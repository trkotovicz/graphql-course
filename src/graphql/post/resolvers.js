const posts = () => {
  return [
    {
      id: '1',
      title: 'Conteúdo 01',
      content: 'Um conteúdo legal',
    },
    {
      id: '2',
      title: 'Conteúdo 02',
      content: 'Um conteúdo mais legal',
    },
    {
      id: '3',
      title: 'Conteúdo 03',
      content: 'Um conteúdo ainda mais legal',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Conteúdo 01',
    content: 'Um conteúdo legal',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
