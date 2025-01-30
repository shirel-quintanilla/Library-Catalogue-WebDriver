
function changeColor() {
    document.getElementById("my-div").style.backgroundColor = "#00FF00";
}

function run() {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://catalog.cwmars.org/?browseCategory=main_new_fiction');
  
    // Interact with the page using Puppeteer's API
    const title = await page.title();
    console.log('Page title:', title);
  
    await browser.close();

    //document.getElementById("my-div").textContent = title;
  }
  
  run();