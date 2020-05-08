namespace grannystore {

    function main(): void {
        let groceries: HTMLSelectElement = document.createElement("select");
        let bread: HTMLOptionElement = document.createElement("option");
        bread.innerHTML = "Bread";
        bread.setAttribute("name", "piece");
        groceries.appendChild(bread);

        let sausage: HTMLOptionElement = document.createElement("option");
        sausage.innerHTML = "Sausage";
        sausage.setAttribute("name", "piece");
        groceries.appendChild(sausage);

        let fish: HTMLOptionElement = document.createElement("option");
        fish.innerHTML = "Fish";
        fish.setAttribute("name", "kg");
        groceries.appendChild(fish);


        let cheese: HTMLOptionElement = document.createElement("option");
        cheese.innerHTML = "Cheese";
        cheese.setAttribute("name", "kg");
        groceries.appendChild(cheese);

        let drinks: HTMLSelectElement = document.createElement("select");
        let water: HTMLOptionElement = document.createElement("option");
        water.innerHTML = "Water";
        water.setAttribute("name", "bottles");
        drinks.appendChild(water);

        let beer: HTMLOptionElement = document.createElement("option");
        beer.innerHTML = "Beer";
        beer.setAttribute("name", "bottles");
        drinks.appendChild(beer);

        let milk: HTMLOptionElement = document.createElement("option");
        milk.innerHTML = "Milk";
        milk.setAttribute("name", "liter");
        drinks.appendChild(milk);


        let juice: HTMLOptionElement = document.createElement("option");
        juice.innerHTML = "Juice";
        juice.setAttribute("name", "bottle");
        drinks.appendChild(juice);

        let allGroceries: HTMLDivElement = <HTMLDivElement>document.getElementById("groceries");
        allGroceries.appendChild(groceries);

        let groceriesCounter: HTMLInputElement = document.createElement("input");
        groceriesCounter.setAttribute("type", "number");
        groceriesCounter.setAttribute("min", "1");
        groceriesCounter.setAttribute("max", "10");
        groceriesCounter.setAttribute("value", "1");
        groceriesCounter.setAttribute("name", "groceries");

        allGroceries.appendChild(groceriesCounter);

        let drinksCounter: HTMLInputElement = document.createElement("input");
        drinksCounter.setAttribute("type", "number");
        drinksCounter.setAttribute("min", "1");
        drinksCounter.setAttribute("max", "10");
        drinksCounter.setAttribute("value", "1");
        drinksCounter.setAttribute("name", "drinks");

        let br: HTMLBRElement = document.createElement("br");
        allGroceries.appendChild(br);

        allGroceries.appendChild(drinks);
        allGroceries.appendChild(drinksCounter);

        let mow: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.innerHTML = "Mow the lawn 30€";
        label.setAttribute("for", "mow");
        mow.setAttribute("id", "mow");
        mow.setAttribute("type", "checkbox");
        mow.setAttribute("price", "30");
        mow.addEventListener("change", handleChange);
        label.appendChild(mow);

        let wiping: HTMLInputElement = document.createElement("input");
        let wipingLabel: HTMLLabelElement = document.createElement("label");
        wipingLabel.innerHTML = "Wet wiping 50€";
        wipingLabel.setAttribute("for", "wiping");
        wiping.setAttribute("id", "wiping");
        wiping.setAttribute("type", "checkbox");
        wiping.setAttribute("price", "50");
        wiping.addEventListener("change", handleChange);
        wipingLabel.appendChild(wiping);

        let vacuum: HTMLInputElement = document.createElement("input");
        let vacuumLabel: HTMLLabelElement = document.createElement("label");
        vacuumLabel.innerHTML = "Vacuum 30€";
        vacuumLabel.setAttribute("for", "vacuum");
        vacuum.setAttribute("id", "vacuum");
        vacuum.setAttribute("type", "checkbox");
        vacuum.setAttribute("price", "30");
        vacuum.addEventListener("change", handleChange);
        vacuumLabel.appendChild(vacuum);

        let post: HTMLInputElement = document.createElement("input");
        let postLabel: HTMLLabelElement = document.createElement("label");
        postLabel.innerHTML = "Take care of post 10€";
        postLabel.setAttribute("for", "post");
        post.setAttribute("id", "post");
        post.setAttribute("type", "checkbox");
        post.setAttribute("price", "10");
        post.addEventListener("change", handleChange);
        postLabel.appendChild(post);

        let allHouseworks: HTMLDivElement = <HTMLDivElement>document.getElementById("housework");
        allHouseworks.appendChild(label);
        allHouseworks.appendChild(wipingLabel);
        allHouseworks.appendChild(vacuumLabel);
        allHouseworks.appendChild(postLabel);


        let deposit: HTMLInputElement = document.createElement("input");
        let depositLabel: HTMLLabelElement = document.createElement("label");
        depositLabel.innerHTML = "Deposit Money";
        depositLabel.setAttribute("for", "deposit");
        deposit.setAttribute("id", "deposit");
        deposit.setAttribute("type", "text");
        deposit.setAttribute("placeholder", "...€");
        depositLabel.appendChild(deposit);

        let withdraw: HTMLInputElement = document.createElement("input");
        let withdrawLabel: HTMLLabelElement = document.createElement("label");
        withdrawLabel.innerHTML = "Withdraw Money";
        depositLabel.setAttribute("for", "withdraw");
        withdraw.setAttribute("id", "withdraw");
        withdraw.setAttribute("type", "text");
        withdraw.setAttribute("placeholder", "...€");
        withdrawLabel.appendChild(withdraw);

        let allMoney: HTMLDivElement = <HTMLDivElement>document.getElementById("money");
        allMoney.appendChild(depositLabel);
        br = document.createElement("br");
        allMoney.appendChild(br);
        allMoney.appendChild(withdrawLabel);


        let card: HTMLInputElement = document.createElement("input");
        let cardLabel: HTMLLabelElement = document.createElement("label");
        cardLabel.innerHTML = "Credit Card";
        depositLabel.setAttribute("for", "card");
        card.setAttribute("id", "card");
        card.setAttribute("type", "radio");
        card.setAttribute("name", "radio-group");
        cardLabel.appendChild(card);

        let paypal: HTMLInputElement = document.createElement("input");
        let paypalLabel: HTMLLabelElement = document.createElement("label");
        paypalLabel.innerHTML = "PayPal";
        paypalLabel.setAttribute("for", "paypal");
        paypal.setAttribute("id", "paypal");
        paypal.setAttribute("type", "radio");
        paypal.setAttribute("name", "radio-group");
        paypalLabel.appendChild(paypal);

        let cash: HTMLInputElement = document.createElement("input");
        let cashLabel: HTMLLabelElement = document.createElement("label");
        cashLabel.innerHTML = "Cash";
        cashLabel.setAttribute("for", "cash");
        cash.setAttribute("id", "cash");
        cash.setAttribute("type", "radio");
        cash.setAttribute("name", "radio-group");
        cashLabel.appendChild(cash);


        let allPayment: HTMLDivElement = <HTMLDivElement>document.getElementById("paymentType");
        allPayment.appendChild(cardLabel);
        allPayment.appendChild(paypalLabel);
        allPayment.appendChild(cashLabel);




    }


    function handleChange(_event: Event): void {
        console.log(_event);
    }



















    window.addEventListener("load", main);

}