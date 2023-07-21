import {test, expect} from '@playwright/test';

test.describe('The thing being tested', function () {

	// Open the app before each test
	test.beforeEach(async function ({page}) {
		await page.goto('http://localhost:8000/');
	});

	test('thing that should happen', async function ({page}) {
		await page.fill('#some-elem', 'some value');
		await page.click('button');
		await expect(page.locator('#some-other-elem')).toHaveText('another value');
	});

});