const { expect } = require('chai');
describe('Basic web functions', () => {
    it('Verify there are more than 40 links on the facebook.com', async () => {
        await browser.url('https://www.facebook.com');
        const numberOfLinks = await $$('a');
        expect(numberOfLinks.length > 40, 'Number of links is NOT as expected').to.be.true;
    });

    it('Verify number of options in Church Chairs is equals to 7', async () => {

        await browser.url('https://classroomessentialsonline.com');

        await $('//a[@href="/church-chairs/"]').moveTo();

        const chairsDisplayed = await $('//a[contains(@href, "-church-chairs/")]').isDisplayed();
        expect(chairsDisplayed, 'Chair elements are NOt displayed').to.be.true;

        const chairItems = await $$('//a[contains(@href, "-church-chairs/")]');
        expect(await chairItems.length, 'Chair items count is NOT as expected').to.equal(7);
    });
});
