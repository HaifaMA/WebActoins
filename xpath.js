const { expect } = require('chai');
const { describe, it } = require("mocha");
describe('Advanced Xpath strategies', () => { 
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

    it('Verify error on empty login flow', async () => {

        await browser.url('/');
        await $('//button[@name="login"]').click();
        const errorMsgDisplayed = await $('//div[contains(text(), "isn’t connected to an account")]').isDisplayed();
        expect(errorMsgDisplayed, 'Error Message is NOT displayed').to.be.true;
    });
    
    it('Verify the empty messenger login flow', async () => {
    
        await browser.url('/');

        await $('//a[text()="Messenger"]').click();

        const checkboxSelected = await $('//label[@class="uiInputLabelInput"]').isSelected();
        expect(checkboxSelected, 'Checkbox is selected').to.be.false;

        await browser.pause(2000);
        await $('//button[@name="login"]').click();

        const linkDisplayed = await $('//a[contains(text(), "Find your account")]').isDisplayed();
        expect(linkDisplayed, 'Find your account link is NOT displayed').to.be.true;

        const continueBtnEnabled = await $('//button[@id="loginbutton"]').isEnabled();
        expect(continueBtnEnabled, 'Continue button is NOT enabled').to.be.true;

        const signInCheckbox = await $('//label[@class="uiInputLabelInput"]');
        const signInSelected = await signInCheckbox.isSelected()
        expect(signInSelected, 'Sign in checkbox is selected').to.be.false;

        await signInCheckbox.click();

        const signInAfterCheck = await $('//input[@name="persistent"]');
        const signInAfterSelect = await signInAfterCheck.isSelected();
        expect(signInAfterSelect, 'Sign in checkbox is NOT selected').to.be.true;
    });
});

