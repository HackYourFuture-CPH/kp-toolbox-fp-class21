const knex = require('../../config/db');
// const HttpError = require('../../api/lib/utils/http-error');

const getUserEnquiry = async () => {
  const contactFormData = knex('user_enquiry').select(
    'user_enquiry.id',
    'user_enquiry.first_name',
    'user_enquiry.surname',
    'user_enquiry.email',
    'user_enquiry.message',
  );
  return contactFormData;
};

module.exports = { getUserEnquiry };
