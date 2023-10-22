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


      it('Verify the travelers count on homepage', async() =>{

        await browser.url('https://www.hotels.com/');

        await $('//button[@data-stid="open-room-picker"]').click();
         
        const inputCounter = await $('//input[@id="traveler_selector_adult_step_input-0"]');
        const plusButton = await $('//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button');
        const minusButton = await $('//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button');
        const counterValue = await inputCounter.getAttribute('value');

        for(let i=counterValue; i<=4; i++){
            if(i < 4){
                await plusButton.click();
            }else if(i > 4){
                await minusButton.click();
            }
        };

        await $('#traveler_selector_add_room').click();

        const inputCounter2 = await $('#traveler_selector_adult_step_input-1');
        const plusButton2 = await $('//input[@id="traveler_selector_adult_step_input-1"]/following-sibling::button');
        const minusButton2 = await $('//input[@id="traveler_selector_adult_step_input-1"]/preceding-sibling::button');
        const counterValue2 = await inputCounter2.getAttribute('value');

        for(let i=counterValue2; i<=3; i++){
            if(i < 3){
                await plusButton2.click();
            }else if(i > 3){
                await minusButton2.click();
            }
        };

        await $('#traveler_selector_done_button').click();

        const totalTravelers = await $('//button[@data-stid="open-room-picker"]').getText();
        expect(totalTravelers, 'Total number doesnt match the number selected').to.equal('7 travelers, 2 rooms')
      });

    });

