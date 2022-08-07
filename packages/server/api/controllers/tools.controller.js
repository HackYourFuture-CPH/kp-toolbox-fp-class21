const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getTools = async (query) => {
  let tools = knex('tools').select(
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

  if ('category' in query) {
    tools = tools
      .join('tools_categories', 'tools_categories.tool_Id', '=', 'tools.id')
      .where((orBuilder) =>
        query.category.forEach((item) => {
          if (!Number(parseInt(item, 10))) {
            throw new HttpError(
              'please specify the IDs of the categories that you want to select. They should be numbers. ',
              400,
            );
          }
          orBuilder.orWhere('tools_categories.category_Id', '=', item);
        }),
      );
  }

  if ('timeframe' in query) {
    tools = tools.where((orBuilder) =>
      query.timeframe.forEach((item) => {
        if (!Number(parseInt(item, 10))) {
          throw new HttpError(
            'please specify the IDs of the timeframes that you want to select. They should be numbers. ',
            400,
          );
        }
        if (item === '1') {
          orBuilder.orWhere('tools.time_frame_min', '=', '5');
        }
        if (item === '2') {
          orBuilder.orWhere((andBuilder) =>
            andBuilder
              .andWhere('tools.time_frame_min', '<=', '30')
              .andWhere('tools.time_frame_max', '>=', '60'),
          );
        }
        if (item === '3') {
          orBuilder.orWhere('tools.time_frame_max', '=', '120');
        }
      }),
    );
  }

  if ('participantsNumber' in query) {
    tools = tools.where((orBuilder) =>
      query.participantsNumber.forEach((item) => {
        if (!Number(parseInt(item, 10))) {
          throw new HttpError(
            'please specify the IDs of the participants number that you want to select. They should be numbers. ',
            400,
          );
        }
        if (item === '1') {
          orBuilder.orWhere('tools.group_size_min', '=', '2');
        }
        if (item === '2') {
          orBuilder.orWhere((andBuilder) =>
            andBuilder
              .andWhere('tools.group_size_min', '<=', '20')
              .andWhere('tools.group_size_max', '>=', '40'),
          );
        }
        if (item === '3') {
          orBuilder.orWhere('tools.group_size_max', '=', '100');
        }
      }),
    );
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

const postTools = async (body) => {
  try {
    if (Object.keys(body).length === 0 || body === {}) {
      throw new Error(`message: bad input`, 422);
    }

    let tools = knex('tools').select(
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

    if ('category' in body) {
      tools
        .join('tools_categories', 'tools_categories.tool_id', '=', 'tools.id')
        .join(
          'categories',
          'categories.id',
          '=',
          'tools_categories.category_id',
        )
        .where((orBuilder) =>
          body.category.forEach((item) => {
            orBuilder.orWhere('categories.name', '=', item.title);
          }),
        );
    }

    if ('timeframe' in body) {
      tools = tools.where((orBuilder) =>
        body.timeframe.forEach((item) => {
          orBuilder.orWhere((andBuilder) =>
            andBuilder
              .andWhere('tools.time_frame_min', '<=', item.time_frame_min)
              .andWhere('tools.time_frame_max', '>=', item.time_frame_max),
          );
        }),
      );
    }

    if ('participantsNumber' in body) {
      tools = tools.where((orBuilder) =>
        body.participantsNumber.forEach((item) => {
          orBuilder.orWhere((andBuilder) =>
            andBuilder
              .andWhere('tools.group_size_min', '<=', item.group_size_min)
              .andWhere('tools.group_size_max', '>=', item.group_size_max),
          );
        }),
      );
    }

    return tools;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getTools,
  getToolById,
  postTools,
};
