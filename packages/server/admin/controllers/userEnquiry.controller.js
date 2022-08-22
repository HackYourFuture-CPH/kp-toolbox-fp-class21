const knex = require('../../config/db');
const HttpError = require('../../api/lib/utils/http-error');

const getUserEnquiry = async (uid) => {
  const isAdmin = await knex('users')
    .select('is_admin')
    .where({ firebase_id: uid });
  if (!Number(isAdmin[0].is_admin)) {
    throw new HttpError('Unauthorized user', 403);
  }

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
