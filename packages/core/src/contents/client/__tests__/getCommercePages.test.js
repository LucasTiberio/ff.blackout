import { getCommercePages } from '../';
import client from '../../../helpers/client';
import fixture from '../__fixtures__/commercepages.fixtures';
import moxios from 'moxios';

describe('getCommercePages()', () => {
  const expectedConfig = undefined;

  beforeEach(() => {
    moxios.install(client);
    jest.clearAllMocks();
  });

  afterEach(() => moxios.uninstall(client));

  const spy = jest.spyOn(client, 'get');
  const query = {
    spaceCode: 'website',
    environmentCode: 'live',
    contentTypeCode: 'listing',
  };

  const response = {
    number: 1,
    totalPages: 1,
    totalItems: 1,
    entries: [
      {
        publicationId: '1fa65fb0-49bf-43b3-902e-78d104f160a3',
        versionId: '914480a1-21a3-4bb4-8670-40ab113b1a3a',
        spaceCode: 'website',
        contentTypeCode: 'listing',
        environmentCode: 'live',
        code: 'test',
        target: {
          contentzone: '10674',
        },
        components: [
          {
            type: 'html',
            content: '',
            name: 'QA HTML Template',
            displayOptions: {},
          },
        ],
      },
    ],
  };

  it('should handle a client request successfully', async () => {
    fixture.success({ queryParams: query, response });

    expect.assertions(2);

    await expect(getCommercePages(query)).resolves.toBe(response);

    expect(spy).toHaveBeenCalledWith(
      '/content/v2/commercepages?contentTypeCode=listing&environmentCode=live&spaceCode=website',
      expectedConfig,
    );
  });

  it('should handle a client request error', async () => {
    fixture.failure({ queryParams: query });

    expect.assertions(2);

    await expect(getCommercePages(query)).rejects.toMatchSnapshot();

    expect(spy).toHaveBeenCalledWith(
      '/content/v2/commercepages?contentTypeCode=listing&environmentCode=live&spaceCode=website',
      expectedConfig,
    );
  });
});
