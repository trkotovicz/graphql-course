const posts = async (_obj, _arg, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

const post = async (_obj, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return post;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
