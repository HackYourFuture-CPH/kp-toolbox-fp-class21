const knex = require('../../config/db');
const HttpError = require('../../api/lib/utils/http-error');

const getTools = async (uid) => {
  const isAdmin = await knex('users')
    .select('is_admin')
    .where({ firebase_id: uid });
  if (!Number(parseInt(isAdmin[0].is_admin))) {
    throw new HttpError('Unauthorized user', 403);
  }
  let tools = knex
    .select(
      'tools.id',
      'tools.name',
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
      knex.raw('GROUP_CONCAT ( categories.name ) as categories'),
    )
    .from('tools')
    .join('tools_categories', 'tools_categories.tool_id', '=', 'tools.id')
    .join('categories', 'tools_categories.category_id', '=', 'categories.id')
    .groupBy('tools.id');
  return tools;
};

const createTool = async (uid, body) => {
  const isAdmin = await knex('users')
    .select('is_admin')
    .where({ firebase_id: uid });
  if (!Number(parseInt(isAdmin[0].is_admin))) {
    throw new HttpError('Unauthorized user', 403);
  }
  if (Object.keys(body).length === 0 || body === {}) {
    throw new HttpError('Message: Bad Input', 422);
  }
  await knex('tools').insert({
    name: body.name,
    time_frame_min: body.time_frame_min,
    time_frame_max: body.time_frame_max,
    group_size_min: body.group_size_min,
    group_size_max: body.group_size_max,
    facilitation_level: body.facilitation_level,
    materials: body.materials,
    pitch: body.pitch,
    description: body.description,
    instructions: body.instructions,
    source: body.source,
    picture: body.picture,
    created_at: new Date(),
  });

  return {
    successful: true,
  };
};

const updateToolById = async (uid, toolId, updatedInfo) => {
  const isAdmin = await knex('users')
    .select('is_admin')
    .where({ firebase_id: uid });
  if (!Number(parseInt(isAdmin[0].is_admin))) {
    throw new HttpError('Unauthorized user', 403);
  }
  return knex('tools').where({ id: toolId }).update(updatedInfo);
};

const deleteToolById = async (uid, toolId) => {
  const isAdmin = await knex('users')
    .select('is_admin')
    .where({ firebase_id: uid });
  if (!Number(parseInt(isAdmin[0].is_admin))) {
    throw new HttpError('Unauthorized user', 403);
  }
  return knex('tools').where({ id: toolId }).del();
};

module.exports = {
  getTools,
  createTool,
  updateToolById,
  deleteToolById,
};
