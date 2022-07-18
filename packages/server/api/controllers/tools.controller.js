const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getTools = async () => {
  let toolsWithCategory = [];
  const tools = await knex('tools').select(
    'id',
    'name',
    'time_frame_min',
    'time_frame_max',
    'group_size_min',
    'group_size_max',
    'facilitation_level',
    'materials',
    'pitch',
    'description',
    'instructions',
    'source',
    'picture',
    'created_at',
  );
  const categoriesList = await knex('categories')
    .select('categories.name', 'tools_categories.tool_id')
    .join(
      'tools_categories',
      'tools_categories.category_id',
      '=',
      'categories.id',
    );

  toolsWithCategory = tools.map((tool) => {
    const result = [];
    categoriesList.map((category) => {
      if (tool.id === category.tool_id) {
        result.push(category.name);
      }
      return result;
    });
    return { ...tool, categories: result };
  });
  return toolsWithCategory;
};

const getToolById = async (id) => {
  if (!Number(id)) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const tools = await knex('tools')
      .select(
        'name',
        'time_frame_min',
        'time_frame_max',
        'group_size_min',
        'group_size_max',
        'facilitation_level',
        'materials',
        'pitch',
        'description',
        'instructions',
        'source',
        'picture',
        'created_at',
      )
      .where({ id });
    if (tools.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    const categoriesList = await knex('categories')
      .select('categories.name')
      .join(
        'tools_categories',
        'tools_categories.category_id',
        '=',
        'categories.id',
      )
      .where('tools_categories.tool_id', '=', id);
    tools[0].categories = categoriesList;
    return tools;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getTools,
  getToolById,
};
