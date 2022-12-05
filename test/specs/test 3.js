describe('libris.ro', () => {
    
  
  it('Login function should not work with invalid credentials', async () => {
        
    await browser.url('https://www.libris.ro/');
    const loginIcon = await $('.header-menu-icon-desk');
    const loginButton = await $('.log-in-cont-inregistrare-btn');
    const username = await $('.log-in-cont-form-date-inregistrare-input');
    const password = await $('#parola');
    const error = $('.date-inregistrare-subtitle');
    
    
    await loginIcon.click();
    await username.setValue('ionuttheodorccccc@yahoo.com');
    await password.setValue('asdQWE1234fdsdfsdf');
    await loginButton.click();
    await expect(error).toBeDisplayed();
    

    
  });

  
  
  
  it('Login function should work with valid credentials', async () => {
        
        const loginIcon = await $('.header-menu-icon-desk');
        const loginButton = await $('.log-in-cont-inregistrare-btn');
        const username = await $('.log-in-cont-form-date-inregistrare-input');
        const password = await $('#parola');
        const contulMeu = await $('.cont-pg-title');
        const logOut = await $('.cont-pg-left-menu-item-link-name'); 
        
        await loginIcon.click();
        await username.setValue('ionuttheodorc@yahoo.com');
        await password.setValue('asdQWE1234');
        await loginButton.click();
        await loginIcon.click();
        await expect(contulMeu).toExist();
        
        

        
    }); 




 it('Add a product to favorite', async () => {

        
        
        const searchBox = await $('#autoComplete');
        const searchButton = await $('#autoCompleteButton');
        const whishlistIcon = await $('.add-wishlist-icon');
        const wishlistButton = await $('.header-nav-wishlist-item');
        const whishListtitle = await $('.wishlist-title-ct');
        
        
        
        await searchBox.setValue('Ghiozdane');
        await searchButton.click();
        await whishlistIcon.click();
        await wishlistButton.click(); 
        await expect(whishListtitle).toExist(); 
        
    });



    
    
    




});