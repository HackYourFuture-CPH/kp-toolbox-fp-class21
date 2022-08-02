const knex = require('../../config/db');

const postFavorites = async (body) => {
  const favourites = await knex('favourites').insert(body);
  return favourites;
};

const getAllFavourites = async () => {
  const favourites = await knex('tools')
    .select('*')
    .join('favourites', 'favourites.tool_id', '=', 'tools.id')
    .join('users', 'users.id', '=', 'favourites.user_id')
    .join('tools_categories', 'tools_categories.tool_id', '=', 'tools.id')
    .join('categories', 'tools_categories.category_id', '=', 'categories.id')
    .where('users.id', '=', '3');
  return favourites;
};

const deleteFavourites = async (toolId, userId, body) => {
  const favourites = await knex('favourites')
    .delete(body)
    .where({ tool_id: toolId })
    .andWhere({ user_id: userId });
  return favourites;
};

module.exports = {
  postFavorites,
  getAllFavourites,
  deleteFavourites,
};
