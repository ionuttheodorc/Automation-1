describe('eMag.ro', () => {
    it('eMAG logo should exist', async () => {

        await browser.url('http://emag.ro');
        
        const logo = await $('.navbar-brand');
        
        await expect(logo).toExist();

        
    });


    it('Resigilate page should open', async () => {

        await browser.url('http://emag.ro');
        
        const Resigilate = await $('[title="Resigilate"]');

        await Resigilate.click();
        
        await expect(Resigilate).toHaveTitle('Produse resigilate - eMAG.ro');

        
    });






});