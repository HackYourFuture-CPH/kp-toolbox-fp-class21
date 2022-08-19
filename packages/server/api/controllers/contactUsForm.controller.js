const knex = require('../../config/db');

const getContactFormData = async () => {
  const contactFormData = knex('user_enquiry').select(
    'user_enquiry.id',
    'user_enquiry.first_name',
    'user_enquiry.surname',
    'user_enquiry.email',
    'user_enquiry.message',
  );
  return contactFormData;
};

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
  getContactFormData,
  addDataFromContactForm,
};
