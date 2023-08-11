Feature('FourGridShop');

Scenario('Adicionado ao carrinho com sucesso',  ({ I }) => {
    I.amOnPage("http://automationpratice.com.br")
    I.waitForText("Shop")
    I.click("Shop")
    I.waitForText("Shop Four Grid")
    I.click("Shop Four Grid")
    I.wait(2)
    I.moveCursorTo(".hover-image")
    I.click("Add to cart")
    I.waitForText("Successfully added to your Cart")
});

Scenario('Objeto ja esta no carrinho',  ({ I }) => {
    I.amOnPage("http://automationpratice.com.br")
    I.waitForText("Shop")
    I.click("Shop")
    I.waitForText("Shop Four Grid")
    I.click("Shop Four Grid")
    I.wait(2)
    I.moveCursorTo(".hover-image")
    I.click("Add to cart")
    I.waitForText("Successfully added to your Cart")
    I.moveCursorTo(".hover-image")
    I.click("Add to cart")
    I.waitForText("This product is already added in your Cart")
});

Scenario('Adicionar na Wishlist',  ({ I }) => {
    I.amOnPage("http://automationpratice.com.br")
    I.waitForText("Shop")
    I.click("Shop")
    I.waitForText("Shop Four Grid")
    I.click("Shop Four Grid")
    I.wait(2)
    I.click("a.action.wishlist")
    I.waitForText("Added to Wishlist")
    I.scr
}).tag("@wishlist");

Scenario('Objeto ja esta na Wishlist',  ({ I }) => {
    I.amOnPage("http://automationpratice.com.br")
    I.waitForText("Shop")
    I.click("Shop")
    I.waitForText("Shop Four Grid")
    I.click("Shop Four Grid")
    I.wait(2)
    I.click("a.action.wishlist")
    I.waitForText("Added to Wishlist")
    I.click("OK")
    I.click("a.action.wishlist")
    I.waitForText("Already Added in Wishlist")
}).tag("@wishlist");

Scenario('Abrir no modo Quick View',  ({ I }) => {
    I.amOnPage("http://automationpratice.com.br")
    I.waitForText("Shop")
    I.click("Shop")
    I.waitForText("Shop Four Grid")
    I.click("Shop Four Grid")
    I.wait(2)
    I.moveCursorTo(".hover-image")
    I.click("a.action.quickview")
    I.waitForClickable("#product_count_form_one > div > a")
});