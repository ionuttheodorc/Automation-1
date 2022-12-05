/*describe('eMag.ro', () => {
    it('should load', async () => {




        await browser.url('http://emag.ro');

        const searchBox = await $('#searchboxTrigger');
        
        const helplink = await $('.navbar-aux-help-link');
        
        const firstButton = await $('/html/body/div[3]/div[1]/div/div[1]/ul/li[2]/a/span');

        helplink.click();
    });
}); */




describe('eMag.ro', () => {
    it('should have the correct page title', async () => {

        await browser.url('http://emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');

    });


    it('should contain a cart button', async () => {

        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();

    });


    it('Should open eMAG Genius page', async () => {

       const geniusButton = await $('[title="Genius"]');
       await geniusButton.click();
       await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');
       
    });



    it('Should have working search button', async () => {

        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');
        
        await searchBox.setValue('Tricou polo');
        await searchButton.click();
        await expect(browser).toHaveTitle('Cauți Tricou polo? Alege din oferta eMAG.ro');
     });

});


