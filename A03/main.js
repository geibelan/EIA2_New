"use strict";
var grannystore;
(function (grannystore) {
    function main() {
        let groceries = document.createElement("select");
        groceries.setAttribute("name", "Food");
        let placeholder = document.createElement("option");
        placeholder.innerHTML = "Food";
        placeholder.disabled = true;
        placeholder.selected = true;
        groceries.appendChild(placeholder);
        let bread = document.createElement("option");
        bread.innerHTML = "Bread piece";
        bread.setAttribute("name", "piece");
        bread.setAttribute("value", "Bread");
        bread.setAttribute("price", "2");
        groceries.appendChild(bread);
        let sausage = document.createElement("option");
        sausage.innerHTML = "Sausage piece";
        sausage.setAttribute("name", "piece");
        sausage.setAttribute("value", "Sausage");
        sausage.setAttribute("price", "1");
        groceries.appendChild(sausage);
        let fish = document.createElement("option");
        fish.innerHTML = "Fish kg";
        fish.setAttribute("name", "kg");
        fish.setAttribute("value", "Fish");
        fish.setAttribute("price", "3");
        groceries.appendChild(fish);
        let cheese = document.createElement("option");
        cheese.innerHTML = "Cheese kg";
        cheese.setAttribute("name", "kg");
        cheese.setAttribute("value", "Cheese");
        cheese.setAttribute("price", "3");
        groceries.appendChild(cheese);
        let drinks = document.createElement("select");
        drinks.setAttribute("name", "Drinks");
        placeholder = document.createElement("option");
        placeholder.innerHTML = "Drinks";
        placeholder.disabled = true;
        placeholder.selected = true;
        drinks.appendChild(placeholder);
        let water = document.createElement("option");
        water.innerHTML = "Water bottles";
        water.setAttribute("name", "bottles");
        water.setAttribute("value", "Water");
        water.setAttribute("price", "0.5");
        drinks.appendChild(water);
        let beer = document.createElement("option");
        beer.innerHTML = "Beer bottles";
        beer.setAttribute("name", "bottles");
        beer.setAttribute("value", "Beer");
        beer.setAttribute("price", "1");
        drinks.appendChild(beer);
        let milk = document.createElement("option");
        milk.innerHTML = "Milk liter";
        milk.setAttribute("name", "liter");
        milk.setAttribute("value", "Milk");
        milk.setAttribute("price", "0.7");
        drinks.appendChild(milk);
        let juice = document.createElement("option");
        juice.innerHTML = "Juice bottle";
        juice.setAttribute("name", "bottle");
        juice.setAttribute("value", "Juice");
        juice.setAttribute("price", "1.5");
        drinks.appendChild(juice);
        let allGroceries = document.getElementById("groceries");
        allGroceries.appendChild(groceries);
        let groceriesCounter = document.createElement("input");
        groceriesCounter.setAttribute("type", "number");
        groceriesCounter.setAttribute("min", "0");
        groceriesCounter.setAttribute("max", "10");
        groceriesCounter.setAttribute("value", "0");
        groceriesCounter.setAttribute("name", "counter");
        groceriesCounter.setAttribute("id", "foodCounter");
        allGroceries.appendChild(groceriesCounter);
        let drinksCounter = document.createElement("input");
        drinksCounter.setAttribute("type", "number");
        drinksCounter.setAttribute("min", "0");
        drinksCounter.setAttribute("max", "20");
        drinksCounter.setAttribute("value", "0");
        drinksCounter.setAttribute("name", "counter");
        drinksCounter.setAttribute("id", "drinkCounter");
        let br = document.createElement("br");
        allGroceries.appendChild(br);
        allGroceries.appendChild(drinks);
        allGroceries.appendChild(drinksCounter);
        let store = document.createElement("select");
        store.setAttribute("name", "Store");
        placeholder = document.createElement("option");
        placeholder.innerHTML = "Store";
        placeholder.disabled = true;
        placeholder.selected = true;
        store.appendChild(placeholder);
        let rewe = document.createElement("option");
        rewe.innerHTML = "Rewe";
        rewe.setAttribute("name", "store");
        rewe.setAttribute("value", "Rewe");
        rewe.setAttribute("price", "10");
        store.appendChild(rewe);
        let aldi = document.createElement("option");
        aldi.innerHTML = "Aldi";
        aldi.setAttribute("name", "store");
        aldi.setAttribute("value", "Aldi");
        aldi.setAttribute("price", "0");
        store.appendChild(aldi);
        let edeka = document.createElement("option");
        edeka.innerHTML = "Edeka";
        edeka.setAttribute("name", "store");
        edeka.setAttribute("value", "Edeka");
        edeka.setAttribute("price", "5");
        store.appendChild(edeka);
        br = document.createElement("br");
        allGroceries.appendChild(br);
        allGroceries.appendChild(store);
        let mow = document.createElement("input");
        let label = document.createElement("label");
        label.innerHTML = "Mow the lawn 30€";
        label.setAttribute("for", "mow");
        mow.setAttribute("id", "mow");
        mow.checked = false;
        mow.setAttribute("type", "checkbox");
        mow.setAttribute("price", "30");
        mow.setAttribute("name", "Mow the lawn");
        mow.setAttribute("value", "Mow");
        label.appendChild(mow);
        let wiping = document.createElement("input");
        let wipingLabel = document.createElement("label");
        wipingLabel.innerHTML = "Wet wiping 50€";
        wipingLabel.setAttribute("for", "wiping");
        wiping.setAttribute("id", "wiping");
        wiping.checked = false;
        wiping.setAttribute("type", "checkbox");
        wiping.setAttribute("price", "50");
        wiping.setAttribute("name", "Wet wiping");
        wiping.setAttribute("value", "Wet");
        wipingLabel.appendChild(wiping);
        let vacuum = document.createElement("input");
        let vacuumLabel = document.createElement("label");
        vacuumLabel.innerHTML = "Vacuum 30€";
        vacuumLabel.setAttribute("for", "vacuum");
        vacuum.setAttribute("id", "vacuum");
        vacuum.checked = false;
        vacuum.setAttribute("type", "checkbox");
        vacuum.setAttribute("price", "30");
        vacuum.setAttribute("name", "Vacuum");
        vacuum.setAttribute("value", "Vacuum");
        vacuumLabel.appendChild(vacuum);
        let post = document.createElement("input");
        let postLabel = document.createElement("label");
        postLabel.innerHTML = "Take care of post 10€";
        postLabel.setAttribute("for", "post");
        post.setAttribute("id", "post");
        post.checked = false;
        post.setAttribute("type", "checkbox");
        post.setAttribute("price", "10");
        post.setAttribute("name", "Take care of post");
        post.setAttribute("value", "post");
        postLabel.appendChild(post);
        let allHouseworks = document.getElementById("housework");
        allHouseworks.appendChild(label);
        allHouseworks.appendChild(wipingLabel);
        allHouseworks.appendChild(vacuumLabel);
        allHouseworks.appendChild(postLabel);
        let deposit = document.createElement("input");
        let depositLabel = document.createElement("label");
        depositLabel.innerHTML = "Deposit Money";
        depositLabel.setAttribute("for", "deposit");
        deposit.setAttribute("id", "deposit");
        deposit.setAttribute("type", "text");
        deposit.setAttribute("name", "deposit");
        deposit.setAttribute("placeholder", "...€");
        deposit.setAttribute("price", "5");
        deposit.setAttribute("text", "Deposit Money");
        depositLabel.appendChild(deposit);
        let withdraw = document.createElement("input");
        let withdrawLabel = document.createElement("label");
        withdrawLabel.innerHTML = "Withdraw Money";
        withdrawLabel.setAttribute("for", "withdraw");
        withdraw.setAttribute("id", "withdraw");
        withdraw.setAttribute("type", "text");
        withdraw.setAttribute("name", "withdraw");
        withdraw.setAttribute("placeholder", "...€");
        withdraw.setAttribute("price", "5");
        withdraw.setAttribute("text", "Withdraw Money");
        withdrawLabel.appendChild(withdraw);
        let allMoney = document.getElementById("money");
        allMoney.appendChild(depositLabel);
        br = document.createElement("br");
        allMoney.appendChild(br);
        allMoney.appendChild(withdrawLabel);
        let card = document.createElement("input");
        let cardLabel = document.createElement("label");
        cardLabel.innerHTML = "Credit Card";
        cardLabel.setAttribute("for", "card");
        card.setAttribute("id", "card");
        card.setAttribute("type", "radio");
        card.setAttribute("name", "radio-group");
        card.setAttribute("value", "Credit Card");
        //cardLabel.appendChild(card);
        let paypal = document.createElement("input");
        let paypalLabel = document.createElement("label");
        paypalLabel.innerHTML = "PayPal";
        paypalLabel.setAttribute("for", "paypal");
        paypal.setAttribute("id", "paypal");
        paypal.setAttribute("type", "radio");
        paypal.setAttribute("name", "radio-group");
        paypal.setAttribute("value", "PayPal");
        //paypalLabel.appendChild(paypal);
        let cash = document.createElement("input");
        let cashLabel = document.createElement("label");
        cashLabel.innerHTML = "Cash";
        cashLabel.setAttribute("for", "cash");
        cash.setAttribute("id", "cash");
        cash.setAttribute("type", "radio");
        cash.setAttribute("name", "radio-group");
        cash.setAttribute("value", "Cash");
        cashLabel.appendChild(cash);
        let allPayment = document.getElementById("paymentType");
        allPayment.appendChild(cardLabel);
        allPayment.appendChild(card);
        allPayment.appendChild(paypalLabel);
        allPayment.appendChild(paypal);
        allPayment.appendChild(cashLabel);
        allPayment.appendChild(cash);
        let form = document.querySelector("div#options");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let order = document.querySelector("div#sum");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        let sum = 0;
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            if (entry[1] != "") {
                if (entry[0] != "counter") {
                    if (entry[0] == "Food") {
                        let price = Number(item.getAttribute("price"));
                        let count = document.getElementById("foodCounter").value;
                        order.innerHTML += count + " X " + entry[1] + "  € " + (Number(count) * price) + "<br>";
                        sum += (Number(count) * price);
                    }
                    else if (entry[0] == "Drinks") {
                        let price = Number(item.getAttribute("price"));
                        let count = document.getElementById("drinkCounter").value;
                        order.innerHTML += count + " X " + entry[1] + "  € " + (Number(count) * price) + "<br>";
                        sum += (Number(count) * price);
                    }
                    else if (entry[0] == "Store") {
                        order.innerHTML += entry[1] + "<br>";
                        let price = Number(item.getAttribute("price"));
                        order.innerHTML += "Fee: " + price + "€<br>";
                        sum += price;
                    }
                    else if (entry[0] == "deposit" || entry[0] == "withdraw") {
                        item = document.querySelector("[name='" + entry[0] + "']");
                        let price = Number(item.getAttribute("price"));
                        order.innerHTML += item.getAttribute("text") + ": " + entry[1] + "€<br>";
                        order.innerHTML += "Fee: " + price + "€<br>";
                        sum += price;
                    }
                    else if (entry[0] == "radio-group") {
                        order.innerHTML += entry[1] + "<br>";
                    }
                    else {
                        let price = Number(item.getAttribute("price"));
                        order.innerHTML += item.name + "  € " + price + "<br>";
                        sum += price;
                    }
                }
            }
        }
        order.innerHTML += "<h3>Total: " + sum + " €</h3>";
    }
    window.addEventListener("load", main);
})(grannystore || (grannystore = {}));
//# sourceMappingURL=main.js.map