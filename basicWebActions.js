const { expect } = require('chai');
describe('Basic web functions', () => {
   it.only('Verify user can go back and forward as expected', async () => {
    await browser.url('https://www.amazon.com/');
    const amazonTitle = await browser.getTitle();
    expect(amazonTitle.includes('Spend less. Smile more.'), 'Current page title doesnt contain the phrase').to.be.true;

    await browser.url(' https://www.hotels.com/');

    const hotelsUrl = await browser.getUrl();
    expect(hotelsUrl.includes('hotels.com'), 'The URL doesnt contain (hotels.com)').to.be.true;

    await browser.back();

    const amazonUrl = await browser.getUrl();
    expect(amazonUrl.includes('amazon.com'), 'The URL doesnt contain (amazon.com)').to.be.true;

    await browser.forward();

    await browser.getTitle();

    const hotelsTitle = await browser.getTitle();
    expect(hotelsTitle.includes('Deals & Discounts for Hotel Reservations'), 'Current page title doesnt contain the phrase').to.be.true;
   });
});