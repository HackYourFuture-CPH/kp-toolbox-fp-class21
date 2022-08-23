const knex = require('../../config/db');

const addDataFromContactForm = async (body) => {
  await knex('user_enquiry').insert({
    first_name: body.first_name,
    surname: body.surname,
    email: body.email,
    message: body.message,
  });

  return {
    successful: true,
  };
};

module.exports = {
  addDataFromContactForm,
};
