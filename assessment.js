const { default: puppeteer } = require('puppeteer');
const first = require('puppeteer');

(async () => {
    const source = await puppeteer.launch({headless: false});
    const land = await source.newPage();

    await land.goto('https://swap.defillama.com');

    await land.waitForSelector('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > img');

    await land.evaluate(() => {
        
        const spanElement = document.querySelector("#react-select-2-input");
        const imageElemetn = document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div:nth-child(1) > span > div > div > div.css-1d8n9bt > div.css-3elh5k-singleValue > div > div:nth-child(1) > img");
        const spanElement2 =document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div:nth-child(1) > span > div > div > div.css-1d8n9bt > div.css-3elh5k-singleValue > div > div:nth-child(2)");
        
            spanElement.textContent = 'Arbitrum One';
            spanElement2.textContent = 'Arbitrum One';
            imageElemetn.src = 'https://icons.llamao.fi/icons/chains/rsz_arbitrum?w=48&h=48';

            const im = document.querySelector('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > img');
            const spanElement3 = document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button > span");
            const spanElement4 = document.querySelector("#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button > span");
            
            spanElement3.textContent = 'WBTC';
                im.src = 'https://token-icons.llamao.fi/icons/tokens/1/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599?h=20&w=20'; // Replace with the new image URL

                spanElement4.textContent = '';
                const span = document.createElement('span');
                span.textContent = 'USDC';
                span.className = 'chakra-text css-sys4p8';
                spanElement4.appendChild(span);

                const img = document.createElement('img');
                img.src = 'https://token-icons.llamao.fi/icons/tokens/1/0xdac17f958d2ee523a2206206994597c13d831ec7?h=20&w=20';
                img.className = 'sc-b49748d5-4 jUxgJZ';
                spanElement4.appendChild(img);
    });
    
   

    setTimeout(function(){
        console.log('prekshu');
    }, 12255422);
    //await source.close();

})();