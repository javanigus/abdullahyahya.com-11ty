const postsData = require('./posts');
const categoriesData = require('./categories');
const authorsData = require('./authors');
const tagsData = require('./tags');

module.exports = async function() {
  const posts = {
    'category': {},
    'tag': {},
    'author': {}
  };
  const wpPosts = await postsData();
  const categories = await categoriesData();
  const tags = await tagsData();
  const authors = await authorsData();

  categories.forEach(category => {
    posts["category"][category.slug] = [];
  });

  tags.forEach(tag => {
    posts["tag"][tag.slug] = [];
  });

  authors.forEach(author => {
    posts["author"][author.slug] = [];
  });

  wpPosts.forEach(post => {
    const newCategories = [];
    const newTags = [];
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

    post.tags.forEach(item => {
      const obj = {};

      obj.name = (Array.from(tags).find(x => x.id === item)?.name);
      obj.slug = (Array.from(tags).find(x => x.id === item)?.slug);

      Object.keys(posts.tag).forEach(tag => {
        if(tag === obj.slug) {
          posts["tag"][tag].push(post);
        }
      })

      newTags.push(obj);
    })

    const obj = {};
    obj.name = (Array.from(authors).find(x => x.id === post.author)?.name)
    obj.slug = (Array.from(authors).find(x => x.id === post.author)?.slug)
    newAuthors.push(obj);
    posts["author"][newAuthors[0].slug].push(post);

    if (typeof post.categories[0] === "number") {
      post.categories = newCategories;
      post.tags = newTags;
      post.authors = newAuthors;
    }

    post.slug = post.link.replace('http://www.abdullahyahya.com/', '');
  })

  posts.all = wpPosts;

  return posts;
};