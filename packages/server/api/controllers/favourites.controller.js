const knex = require('../../config/db');

const postFavorites = async (body) => {
  const favourites = await knex('favourites').insert(body);
  return favourites;
};

const getAllUsersFavourites = async (userId) => {
  const favourites = await knex('tools')
    .select(
      'tools.id',
      'tools.name',
      knex.raw('GROUP_CONCAT (categories.name) as categories'),
      'tools.time_frame_min',
      'tools.time_frame_max',
      'tools.group_size_min',
      'tools.group_size_max',
      'tools.facilitation_level',
      'tools.materials',
      'tools.pitch',
      'tools.description',
      'tools.instructions',
      'tools.source',
      'tools.picture',
      'tools.created_at',
    )
    .join('favourites', 'favourites.tool_id', '=', 'tools.id')
    .join('users', 'users.id', '=', 'favourites.user_id')
    .join('tools_categories', 'tools_categories.tool_id', '=', 'tools.id')
    .join('categories', 'tools_categories.category_id', '=', 'categories.id')
    .where('users.id', '=', userId)
    .groupBy('tools.id');
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
  getAllUsersFavourites,
  deleteFavourites,
};
