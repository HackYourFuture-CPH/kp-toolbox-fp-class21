const knex = require('../../config/db');

const createTool = async (body) => {
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

const updateToolById = async (toolId, updatedInfo) => {
  return knex('tools').where({ id: toolId }).update(updatedInfo);
};

const deleteToolById = async (toolId) => {
  return knex('tools').where({ id: toolId }).del();
};

module.exports = {
  createTool,
  updateToolById,
  deleteToolById,
};
