const postsData = require('./posts');
const categoriesData = require('./categories');
const authorsData = require('./authors');

module.exports = async function() {
  const posts = {
    'category': {},
    'author': {}
  };
  const wpPosts = await postsData();
  const categories = await categoriesData();
  const authors = await authorsData();

  categories.forEach(category => {
    posts["category"][category.slug] = [];
  });

  authors.forEach(author => {
    posts["author"][author.slug] = [];
  });

  wpPosts.forEach(post => {
    const newCategories = [];
    const newAuthors = [];
    let description = post.excerpt.rendered;
    description = description.slice(description.indexOf('<p>') + 3, description.indexOf('<a href='));
    description = description.slice(0, description.lastIndexOf('.') + 1);
    post.description = description;

    post.categories.forEach(item => {


      const obj = {};

      obj.name = (Array.from(categories).find(x => x.id === item)?.name);
      obj.slug = (Array.from(categories).find(x => x.id === item)?.slug);

      Object.keys(posts.category).forEach(category => {
        if(category === obj.slug) {
          posts["category"][category].push(post);
        }
      })

      newCategories.push(obj);
    })

    const obj = {};
    obj.name = (Array.from(authors).find(x => x.id === post.author)?.name)
    obj.slug = (Array.from(authors).find(x => x.id === post.author)?.slug)
    newAuthors.push(obj);
    posts["author"][newAuthors[0].slug].push(post);

    post.categories = newCategories;
    post.authors = newAuthors;
  })

  posts.all = wpPosts;
  console.log(posts);

  return posts;
};