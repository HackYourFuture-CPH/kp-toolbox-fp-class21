const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getTools = async () => {
  return knex('tools').select(
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

const createNewTool = async (body) => {
  await knex('tools').insert({
    name: body.name,
    time_frame_min: body.time_frame_min,
    group_size_min: body.group_size_min,
    facilitation_level: body.facilitation_level,
    description: body.description,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getTools,
  getToolById,
  createNewTool,
};
