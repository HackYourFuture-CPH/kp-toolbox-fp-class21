const knex = require('../../config/db');

const postFavorites = async (uid, toolId) => {
  const user = await knex('users').select('id').where({ firebase_id: uid });
  const favourites = await knex('favourites').insert({
    user_id: user.id,
    tool_id: toolId,
  });
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

const deleteFavourites = async (body) => {
  const favourites = await knex('favourites')
    .where({ tool_id: body.tool_id })
    .andWhere({ user_id: body.user_id })
    .del();
  return favourites;
};

module.exports = {
  postFavorites,
  getAllUsersFavourites,
  deleteFavourites,
};
