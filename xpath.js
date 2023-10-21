const { expect } = require('chai');
const { describe, it } = require("mocha");
describe('Xpath strategies', () => { 
    it('Verify current temp is less than or equals to feel-like temp', async () => {
        await browser.url('https://www.accuweather.com/');

        const currentTempElement = await $('//span[@class="recent-location-temp"]').getText();
        const currentTemp = Number(currentTempElement.trim().replace('°', '').replace('F', ''));

        const feelsLikeElement = await $('//span[@class="recent-location-real-feel-value"]').getText();
        const feelsLikeTemp = Number(feelsLikeElement.trim().replace('°', ''));

        expect(currentTemp <= feelsLikeTemp, 'Current temperature should be less than or equal to Feel like temperature').to.be.true;

        if (currentTemp >= 45 && currentTemp <= 55) {
            console.log(`Current temperature is between 45 and 55.`);
        } else {
            console.log(`Current temperature is not between 45 and 55.`);
        }
    });
});





