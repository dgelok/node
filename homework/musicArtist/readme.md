
<h1>Tigran Hamasyan: Fan Page<h1>

<img src="images/graphs.png">

<h2><u>Overview:</u><h2>
<h4>Armenian Jazz Pianist Tigran Hamasyan is internationally renowned for his blend of traditional Armenian folk music, progressive rhythms, and advanced sense of harmony. His unique voice has gained him recognition from some of the most significant voices in modern jazz.

This development of this project was designed to gain fluency in responsive programming, EJS architecture, Express, and Bootstrap.</h4>

</br>

<h2><u>About me:</u></h2>
<b>Hi!</b> My name is Dan Gelok, and at the time of writing, I am a student at DigitalCrafts Houston, an intensive full-stack development training course. Before programming I was a professional saxophonist.

</br>
</br>
</br>

<h2><u>Tools used in the project:</u></h3>
<h3>Languages:</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

Other:

<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Express</li>
    <li>EJS</li>
    <li>JQuery</li>
    <li>JSON</li>
    <li>Bootstrap</li>
    <li>FontAwesome</li>
    <li>Node.js</li>
</ul>

<h3>APIs</h3>
<ul>
    <li>Firebase and Firestore (Authentication and Database) - https://firebase.google.com/</li>
    <li>News API (news API) - https://newsapi.org/</li>
    <li>IEX Cloud (real-time stock info) - https://www.iexcloud.io/</li>
    <li>IEX Cloud (stock ticker symbol info) - https://www.iexcloud.io/</li>
</ul

</br>

<h3><u>Base Objectives:</u></h3>
<ul>
    <li>Users have the ability to buy, sell, or keep individual stocks and liquid cash</li>
    <li>Deliver stock prices in real time</li>
    <li>Provide an easy-search function for finding stocks</li>
    <li>Display up-to-date stock information alongside current financial holdings</li>
    <li>Track investment data over time using data persistence</li>
</ul>

</br>

<h2><u>Flex Goals Completed:</u></h2>
<ul>
    <li>Provide universal login from anywhere </li>
    <li>Smoothen out navigation for natural UI experience </li>
</ul>

</br>

<h2><u>Stretch Goals Future</u></h2>
<ul>
    <li>Provide percentage growth/loss for individual stock holding</li>
    <li>Provide individual growth/loss tracking graphs for unique holdings</li>
    <li>Allow for competitive play against friends</li>
    <li>Provide purchasable icons and UI upgrades available for purchase (with in-game virtual earnings)</li>
</ul>

</br>

<h2><u>Challenges & Solutions:</u><h2>
<h3>Some of the biggest challenges we faced with this project build included:</h2>

<b>Challenge: Version and Merge Control</b>
<br>
<b>Solution: After much trial and error, our Git/GitHub procedures and skills were greatly refined and allowed for much smoother interaction between developers.</b>

<b>Challenge: Multiple API calls</b>
<br>
<b>Solution: Independent API calls and refactoring to allow for asynchronous events smoothened out user experience and consistency.</b>

<b>Challenge: Functional Complexity</b>
<br>
<b>Solution: Refactoring to allow portfolios using OOP techniques made the program significantly more efficient and streamlined remaining development for ease of use.</b>

<b>Challenge: CSS Manipulation of Components</b>
<br>
<b>Solution: Significant under-the-hood work on pre-existing components provided a much more visually pleasing end product on charts and graphs.</b>

</br>

<h2><u>Code Snippets:</u></h2>

<h4>This snippet showcases the declaration of our user Class (including methods and attributes), and demonstrates OOP concepts.</h4>

```
class User{
    constructor(userName, cash,currentNetWorth, holdings = []){
        this.userName = userName;
        this.cash = cash;
        this.currentNetWorth = [currentNetWorth];
        this.holdings = holdings;
        this.currentStockAwaitingPurchase = {};
        this.currentStockAwaitingSell = {};
    }

    addStockToPurchaseList(name, symbol){
        this.currentStockAwaitingPurchase = {
            name : name,
            symbol : symbol,
        }
    }

    saveUser(){
        localStorage.setItem(`${this.userName}`, JSON.stringify(this))
        db.collection("users").doc(`${this.userName}`).set({
            info: JSON.stringify(this)
        }).then(console.log("saved to database"))
    }

    createNewHolding(name, symbol, numShares){
        let found = false;
        for(let comp of this.holdings){
            if(symbol == comp.symbol){
                comp.totalShares += numShares
                console.log(comp.totalShares);
                found = true;
            }
        }
        if(found == false){
            let newHolding = new Holding(name,symbol,numShares)
            console.log(newHolding.totalShares);
            this.holdings.push(newHolding)
        }
    }

    async buyStock(name, symbol, numShares, latestPrice){
        let stockPrice = await latestPrice(symbol)
        console.log(typeof this.cash,typeof numShares, typeof stockPrice)
        if(this.cash >= numShares * stockPrice){
            console.log("Cash is enough to buy");
            console.log(this.cash);
            this.createNewHolding(name, symbol, numShares)
            
            this.cash = this.cash - (numShares * stockPrice)
            console.log(this.cash);
        }
        this.saveUser();
    }

    async sellStock(symbol, numSharesToSell, latestPrice){
        console.log(this.cash);
        let totalSellPrice = parseFloat(numSharesToSell).toFixed(2) * parseFloat(latestPrice).toFixed(2)
        console.log(totalSellPrice);
        for(let comp of this.holdings){
            if(comp.symbol == symbol){
                comp.totalShares -= numSharesToSell
                console.log(comp.totalShares);
            }
        }
        this.holdings = this.holdings.filter(comp => comp.totalShares > 0)
        console.log(this.holdings);
        this.cash += totalSellPrice;
        console.log(this.cash);
        this.saveUser();
        await this.getData();
        createLineGraph();
    }

    async getStockData(stockSymbol){
        let response = await fetch(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote/?token=${APIurls[2]}`)
        let json = await response.json();
        return json;
    }

    async getStockLatestPrice(stockSymbol){
        let response = await fetch(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote/?token=${APIurls[2]}`)
            let json = await response.json();
            console.log(json)
            let currentPrice = json.latestPrice;
            console.log(currentPrice);
            return currentPrice;
    }

    async getPortfolioData(){
        return Promise.all(this.holdings.map( comp => {
            return fetch(`https://cloud.iexapis.com/stable/stock/${comp.symbol}/quote/?token=${APIurls[2]}`).then(resp => resp.json())
        })).then(results => {
            let total = 0;
            let companyArray = []
            results.forEach((comp, index)=>{
            
            let currentCompInHoldings = this.holdings[index];
            let latestPrice = parseFloat(comp.latestPrice); 
            let totalSharesOfComp =  parseInt(currentCompInHoldings.totalShares);  
            total += (latestPrice * totalSharesOfComp);
            companyArray.push({
                name : currentCompInHoldings.name,
                totalSharesValue : (latestPrice * totalSharesOfComp)
            })
        })
        return {
            totalPortfolioValue : total + this.cash,
            companys : companyArray
        }
    })
}

```

<br/>

<h4>The following code is part of the Firebase Authentication Protocol, and redirects users from 'inner' pages to the login page if they are not properly logged in.</h4>

```
const auth = firebase.auth();
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(`user logged in: ${user.email}`)
        // console.log(user)
    }
    else {
        console.log('user logged out')
        window.location.href = "./index.html"
    }
})

```

<br />
<h4>This excerpt, taken from the dashboard page, is a table populated from the user's portfolio object. It demonstrates bootstrap manipuation, HTML component development, and pure CSS styling, and is the main focal point displaying data in the user's dashboard.</h4>

```
<div class="row ml-1">

    <div class="col-lg-2 col-sm-auto">
    </div>

    <div class="col" style="padding-right:15px;">
    <table class="table table-success">
        <thead class="table-dark">
            <tr>
            <th scope="col">Company (Ticker)</th>
            <th scope="col">Shares</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody id="tbody">
            
        </tbody>
        </table>
    </div>
    <div class="col-lg-2 col-sm-auto mr-sm-1">
    </div>

</div>

```

</br>

<h2>Screenshots:</h2>
<img src="images/loginPage.png">
<h4>Login and user registration.</h4>
<br />
<img src="images/graphs.png">
<h4>Live-updated graphs of a player's current portfolio.</h4>
<br />
<img src="images/checkoutPage.png">
<h4>Drop-down menu providing an easy search for stocks to buy or sell.</h4>
