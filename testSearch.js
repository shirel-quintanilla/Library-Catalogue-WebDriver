// Require selenium webdriver 
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
let webdriver = require("selenium-webdriver"); 
//Require promptsync
let prompt = require('prompt-sync')();

// Require webdriver for chrome 
// browser called chromedriver 
// NOTE FOR LATER: BUT WHAT IF USER IS NOT IN CHROME? 
// NOTE FOR LATER: MAKE INTO ONE ASYNC FUNCTION INSETEAD OF THIS !!!
require("chromedriver"); 

// Take in the input of the search 
var searchtext = prompt("insert search term:");
//var inputtype = prompt("select one: 'Keyword', 'Title', 'Start of Title', 'Series', 'Author', 'Subject', 'Call Number'");
//var searchplace = prompt("select one: 'in Library Catalog', 'in List', 'in History & Archives'"); 

async function searchTerm(termText) {

    // Build new window of chrome 
    let driver = new webdriver.Builder().forBrowser("chrome").build(); 

    // Open catalogue using get method 
    driver.get("https://willmstwn.cwmars.org/?browseCategory=main_new_non_fiction");
    // Insert user's search term in cataloge's search bar
    driver.findElement(By.id("lookfor")).sendKeys(termText);
    // Find ancestor of search button 
    const searchsearch = driver.findElement(By.id("horizontal-search-button-container"));
    //Find search and click it
    searchsearch.findElement(By.className("btn btn-default")).click();
    const pageTitle = await driver.getTitle();
    //const resultURL = await driver.getCurrentUrl();

    //wait driver.wait()

    //console.log("result page: ", resultURL);
}

//call func

searchTerm(searchtext);

