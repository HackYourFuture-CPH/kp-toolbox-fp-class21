const knex = require('../../config/db');

// const postFavorites = async (req, res) => {
//   try {
//     const newFavourite = await knex('favourites').insert(req.body);
//     res.send(`Added new favourite: ${newFavourite}`);
//   } catch (error) {
//     res.status(400).send('Cannot add');
//   }
// };

const postFavorites = async (body) => {
  const favourites = await knex('favourites').insert(body);
  return favourites;
};

const getAllFavourites = async () => {
  const favourites = await knex('favourites').select('*');
  return favourites;
};

const getFavouriteById = async () => {
  const favourites = await knew('favourites').join();
};

module.exports = {
  postFavorites,
  getAllFavourites,
};
