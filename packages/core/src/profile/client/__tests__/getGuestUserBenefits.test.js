import { getGuestUserBenefits } from '..';
import client from '../../../helpers/client';
import fixtures from '../__fixtures__/getGuestUserBenefits.fixtures';
import moxios from 'moxios';

describe('getGuestUserBenefits', () => {
  const expectedConfig = undefined;
  const userId = '123456';
  const spy = jest.spyOn(client, 'get');

  beforeEach(() => {
    moxios.install(client);
    jest.clearAllMocks();
  });

  afterEach(() => moxios.uninstall(client));

  it('should handle a client request successfully', async () => {
    const response = {};

    fixtures.success({ userId, response });

    expect.assertions(2);

    await expect(getGuestUserBenefits(userId)).resolves.toBe(response);

    expect(spy).toHaveBeenCalledWith(
      `/account/v1/guestUsers/${userId}/benefits`,
      expectedConfig,
    );
  });

  it('should receive a client request error', async () => {
    fixtures.failure({ userId });

    expect.assertions(2);
    await expect(getGuestUserBenefits(userId)).rejects.toMatchSnapshot();
    expect(spy).toHaveBeenCalledWith(
      `/account/v1/guestUsers/${userId}/benefits`,
      expectedConfig,
    );
  });
});
