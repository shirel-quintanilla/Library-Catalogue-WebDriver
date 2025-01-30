
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
// NOTE FOR LATER: FIGURE OUT HOW TO EXTRACT URL (SOLVE <PENDING>)
require("chromedriver"); 


// Take in the input of the search 
var text = prompt("Insert search term: ");
var input = prompt("Select one: 'Keyword', 'Title', 'Start of Title', 'Series', 'Author', 'Subject', 'Call Number': ");
var place = prompt("Select one: 'in Library Catalog', 'in List', 'in History & Archives': "); 



function searchTerm(termText, inputType, searchPlace) {

    // Build new window of chrome 
    let driver = new webdriver.Builder().forBrowser("chrome").build(); 

    // Open catalogue using get method 
    driver.get("https://willmstwn.cwmars.org/?browseCategory=main_new_non_fiction");
    
    //select input type 
    if (inputType == "Title") {
        driver.findElement(By.id("searchIndex")).click();
        driver.findElement(By.xpath('//*[@id="searchIndex"]/option[2]')).click();
    } else if (inputType == "Start of Title") {
        driver.findElement(By.id("searchIndex")).click();
        driver.findElement(By.xpath('//*[@id="searchIndex"]/option[3]')).click();
    } else if (inputType == "Series") {
        driver.findElement(By.id("searchIndex")).click();
        driver.findElement(By.xpath('//*[@id="searchIndex"]/option[4]')).click();
    } else if (inputType == "Author") {
        driver.findElement(By.id("searchIndex")).click();
        driver.findElement(By.xpath('//*[@id="searchIndex"]/option[5]')).click();
    } else if (inputType == "Subject") {
        driver.findElement(By.id("searchIndex")).click();
        driver.findElement(By.xpath('//*[@id="searchIndex"]/option[6]')).click();
    } else if (inputType == "Call Number") {
        driver.findElement(By.id("searchIndex")).click();
        driver.findElement(By.xpath('//*[@id="searchIndex"]/option[7]')).click();
    } else {

    }

    if (searchPlace == "in List") {
        driver.findElement(By.id("searchSource")).click();
        driver.findElement(By.xpath('//*[@id="searchSource"]/option[2]')).click();
    } else if (searchPlace == "in History & Archives") {
        driver.findElement(By.id("searchSource")).click();
        driver.findElement(By.xpath('//*[@id="searchSource"]/option[3]')).click();
    } else {

        }

    // Insert user's search term in cataloge's search bar
    driver.findElement(By.id("lookfor")).sendKeys(termText);

    //Find search and click it
    const searchsearch = driver.findElement(By.id("horizontal-search-button-container"));
    searchsearch.findElement(By.className("btn btn-default")).click();
    
    //const pageTitle = await driver.getTitle();
    
    //const resultURL = await driver.getCurrentUrl();
    

    //return resultURL.toString(); 
}

//call func
//my test >.<
searchTerm(text, input, place);

