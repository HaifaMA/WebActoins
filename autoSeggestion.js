describe('AutoSuggestion strategy', () => {
    it('Verify user can select value from auto-suggestion', async () => { 
        await browser.url('https://www.hotels.com/');

        await $('//button[@aria-label="Going to"]').click()
        
        await $('#destination_form_field').setValue('newp');
        
        await browser.pause(2000);
        
        const allSuggestions = await $$('//li[@data-stid="destination_form_field-result-item"]//button');
        
        for(let suggestion of allSuggestions){  
            const suggestionValue =  await suggestion.getAttribute('aria-label');
            if(suggestionValue.startsWith('Newport Beach')){
                await suggestion.click();
                break;
            }
        };
    });
});

