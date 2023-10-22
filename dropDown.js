const { expect } = require('chai');
const moment = require('moment');

describe('Drop down strategy', () => {
    it('Verify the current date is select by default in Sign Up dropdown', async () => {

        await browser.url('https://www.facebook.com');

        await $('//a[text()="Create new account"]').click();

        const currentMonth = moment().format('MMM');
        const monthDate = await $('//select[@id="month"]//option[@selected]').getText();
        expect(monthDate === currentMonth, 'Default month is NOT the current month').to.be.true;
    
        const currentDay = moment().format('D');
        const dayDate = await $('//select[@id="day"]//option[@selected]').getText();
        expect(dayDate === currentDay, 'Default day is NOT the current day').to.be.true;

        const currentYear = moment().format('Y');
        const yearDate = await $('//select[@id="year"]//option[@selected]').getText();
        expect(yearDate === currentYear, 'Default year is NOT the current year').to.be.true;
    });
});


/*
TC-2: Verify the travelers count on homepage
      1. Launch hotels.com 
      2. Make Adults=4 in Room-1
      3. Click Add another room
      4. Make Adults=3 in Room-2
      5. Click on Done button
      6. Verify total-travalers is equals to the number of adults mentioned in rooms*/
