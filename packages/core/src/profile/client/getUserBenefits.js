import client, { adaptError } from '../../helpers/client';
import join from 'proper-url-join';

/**
 * Method responsible for getting all the user benefits.
 *
 * @function getUserBenefits
 * @memberof module:profile/client
 *
 * @param {number} userId - The user's id.
 * @param {object} [config] - Custom configurations to send to the client
 * instance (axios).
 *
 * @returns {Promise} Promise that will resolve when the call to
 * the endpoint finishes.
 */
export default (userId, config) =>
  client
    .get(join('/account/v1/users', userId, '/benefits'), config)
    .then(response => response.data)
    .catch(error => {
      throw adaptError(error);
    });
