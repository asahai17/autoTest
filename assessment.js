const { default: puppeteer } = require('puppeteer');
const first = require('puppeteer');

(async () => {
    const source = await puppeteer.launch({headless: false});
    const land = await source.newPage();

    await land.goto('https://swap.defillama.com');

    await land.type('#react-select-2-input', 'Arbitrum One');
    await land.type('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input', '12');
       
        await land.evaluate(() => {
            const spanElement = document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > img");
            if (spanElement) {
            spanElement.textContent = 'WBTC';
            }
        });
            await land.evaluate(() => {
              const im = document.querySelector('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > img');
             console.log(im);
              if (im) {
                im.src = 'https://token-icons.llamao.fi/icons/tokens/42161/0…f2a2543b76a4166549f7aab2e75bef0aefc5b0f?h=20&w=20'; // Replace with the new image URL
                
            }
            },);

        
        await land.evaluate(() => {
            const spanElement = document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > span");
            if (spanElement) {
            spanElement.textContent = 'WBTC';
            }
        });

        //await land.click('div[class="css-lv0ed5"]');
        await land.evaluate(() => {
            const spanElement = document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button > span");
            if (spanElement) {
            spanElement.textContent = 'USDC';
            }
        });
    

    setTimeout(function(){
        console.log('prekshu');
    }, 12255422);
    //await source.close();

})();