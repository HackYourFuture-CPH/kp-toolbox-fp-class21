const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getTools = async (query) => {
  let tools = knex('tools')
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
    );

  // Example for testing: /api/tools?categoriesSelected[]=3&categoriesSelected[]=1
  if ('categoriesSelected' in query) {
    tools = tools
      .join('tools_categories', 'tools_categories.tool_Id', '=', 'tools.id')
      .where(builder =>
        query.categoriesSelected.forEach(item => {
          if (!Number(item)) {
            throw new HttpError('please specify the IDs of the categories that you want to select. They should be numbers. ', 400);
          }
          builder.orWhere('tools_categories.category_Id', '=', item)
        }
        )
      )
  }

  // Example for testing: /api/tools?timeframesSelected[]=1&timeframesSelected[]=2
  if ('timeframesSelected' in query) {
    tools = tools.where(builder =>
      query.timeframesSelected.forEach(item => {
        if (!Number(item)) {
          throw new HttpError('please specify the IDs of the timeframes that you want to select. They should be numbers. ', 400);
        }
        if (item === '1') {
          builder
            .orWhere('tools.time_frame_min', '=', '5')
        }
        if (item === '2') {
          builder.orWhere(builder =>
            builder
              .andWhere('tools.time_frame_min', '<=', '30')
              .andWhere('tools.time_frame_max', '>=', '60')
          )
        }
        if (item === '3') {
          builder
            .orWhere('tools.time_frame_max', '=', '120')
        }
      }
      )
    )
  }

  // Example for testing: /api/tools?participantsNumSelected[]=2&participantsNumSelected[]=3
  if ('participantsNumSelected' in query) {
    tools = tools.where(builder =>
      query.participantsNumSelected.forEach(item => {
        if (!Number(item)) {
          throw new HttpError('please specify the IDs of the participants number that you want to select. They should be numbers. ', 400);
        }
        if (item === '1') {
          builder
            .orWhere('tools.group_size_min', '=', '2')
        }
        if (item === '2') {
          builder.orWhere(builder =>
            builder
              .andWhere('tools.group_size_min', '<=', '20')
              .andWhere('tools.group_size_max', '>=', '40')
          )
        }
        if (item === '3') {
          builder
            .orWhere('tools.group_size_max', '=', '100')
        }
      }
      )
    )
  }

  return tools;
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
    return tools;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getTools,
  getToolById,
};
