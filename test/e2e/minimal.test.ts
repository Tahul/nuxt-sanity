import { setupTest, createPage } from '@nuxtjs/module-test-utils'

describe('module with minimal options', () => {
  const mockSanityClient = jest.fn()

  beforeAll(() => {
    jest.mock('@sanity/client', () => mockSanityClient)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  setupTest({
    testDir: __dirname,
    browser: true,
    fixture: '../../example',
    config: {
      sanity: {
        projectId: 'sample-project',
        minimal: true,
        imageHelper: false,
      },
    },
  })

  test('Minimal client is used', async () => {
    const page = await createPage('/')
    await page.getHtml()
    expect(mockSanityClient).toHaveBeenCalledTimes(0)
  })
})
