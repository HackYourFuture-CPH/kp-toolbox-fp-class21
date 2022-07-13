const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getCategories = async () => {
  return knex('categories').select(
    'categories.id',
    'categories.name',
  );
};

const getCategoriesById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const categories = await knex('categories')
      .select('categories.id as id', 'name')
      .where({ id });
    if (categories.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return categories;
  } catch (error) {
    return error.message;
  }
};

const editCategories = async (
  categoriesId,
  updatedCategories,
) => {
  if (!categoriesId) {
    throw new HttpError('categoriesId should be a number', 400);
  }

  return knex('categories').where({ id: categoriesId }).update({
    name: updatedcategories.name,
    updatedAt: moment().format(),
  });
};

const deleteCategories = async (categoriesId) => {
  return knex('categories').where({ id: categoriesId }).del();
};

const createCategories = async (body) => {
  await knex('categories').insert({
    name: body.name,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getCategories,
  getCategoriesById,
  deleteCategories,
  createCategories,
  editCategories,
};
