const { expect } = require ('chai');
describe('Facebook Links Test', () => {
    it('should open multiple links from Facebook homepage', async () => {

      await browser.url('https://www.facebook.com/');
      
      const metaPayLink = await $('//a[text()="Meta Pay"]').click();
    
      const threadLink = await $('//a[text()="Threads"]').click();
  
      const instagramLink = await $('//a[text()="Instagram"]').click();


      const handles = await browser.getWindowHandles();
        let instagramHandle = null;
        for(let handle of handles){
            await browser.switchToWindow(handle);
           const pageTitle = await browser.getTitle();
            if (!(pageTitle.includes('Instagram'))) {
                await browser.closeWindow();
                await browser.pause(2000)  
            }else{
                instagramHandle = handle;
            }
        };
        await browser.switchToWindow(instagramHandle);
        await $('//span[text()="Sign up"]').click();
        await browser.pause(2000)
        const loginText = await $('//p[text()="Have an account? "]').isDisplayed();
        expect(loginText).to.be.true;

    });
});
      
