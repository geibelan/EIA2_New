"use strict";
var dataStructures;
(function (dataStructures) {
    function main() {
        for (let category in dataStructures.data) {
            let div = document.getElementById(category);
            if (category == "housework") {
                createCheckbox(div, category);
            }
            else if (category == "Food" || category == "Drinks" || category == "Store") {
                div = document.getElementById("groceries");
                createSelect(div, category);
            }
            else if (category == "money") {
                createText(div, category);
            }
            else if (category == "paymentType") {
                createRadio(div, category);
            }
        }
        let form = document.querySelector("div#options");
        form.addEventListener("change", handleChange);
    }
    function createCheckbox(_div, _category) {
        for (let index in dataStructures.data[_category]) {
            let item = dataStructures.data[_category][index];
            let input = document.createElement("input");
            let label = document.createElement("label");
            label.innerHTML = item.name + " " + item.price + "€";
            label.setAttribute("for", item.id);
            input.setAttribute("id", item.id);
            input.setAttribute("type", "checkbox");
            input.setAttribute("price", "" + item.price);
            input.setAttribute("name", item.name);
            input.setAttribute("value", item.id);
            label.appendChild(input);
            _div.appendChild(label);
        }
    }
    function createSelect(_div, _category) {
        let select = document.createElement("select");
        select.setAttribute("name", _category);
        let placeholder = document.createElement("option");
        placeholder.innerHTML = _category + "";
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);
        for (let index in dataStructures.data[_category]) {
            let item = dataStructures.data[_category][index];
            let bread = document.createElement("option");
            bread.innerHTML = item.name + " ";
            bread.setAttribute("name", item.price + "");
            bread.setAttribute("value", item.name + " ");
            bread.setAttribute("price", item.price + "");
            select.appendChild(bread);
        }
        _div.appendChild(select);
        if (_category != "Store") {
            let counter = document.createElement("input");
            counter.setAttribute("type", "number");
            counter.setAttribute("min", "0");
            counter.setAttribute("max", "10");
            counter.setAttribute("value", "0");
            counter.setAttribute("name", "counter");
            counter.setAttribute("id", _category);
            _div.appendChild(counter);
        }
        let br = document.createElement("br");
        _div.appendChild(br);
    }
    function createText(_div, _category) {
        for (let index in dataStructures.data[_category]) {
            let item = dataStructures.data[_category][index];
            let input = document.createElement("input");
            let label = document.createElement("label");
            label.innerHTML = item.name + " ";
            label.setAttribute("for", item.id);
            input.setAttribute("id", item.id);
            input.setAttribute("type", "text");
            input.setAttribute("text", item.name + " ");
            input.setAttribute("placeholder", "...€");
            input.setAttribute("price", "" + item.price);
            input.setAttribute("name", item.id);
            label.appendChild(input);
            _div.appendChild(label);
            let br = document.createElement("br");
            _div.appendChild(br);
        }
    }
    function createRadio(_div, _category) {
        for (let index in dataStructures.data[_category]) {
            let item = dataStructures.data[_category][index];
            let input = document.createElement("input");
            let label = document.createElement("label");
            label.innerHTML = item.name + " ";
            label.setAttribute("for", item.id);
            input.setAttribute("id", item.id);
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio-group");
            input.setAttribute("value", item.name);
            label.appendChild(input);
            _div.appendChild(label);
        }
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
                        let count = document.getElementById(entry[0]).value;
                        order.innerHTML += count + " X " + entry[1] + "  € " + (Number(count) * price) + "<br>";
                        sum += (Number(count) * price);
                    }
                    else if (entry[0] == "Drinks") {
                        let price = Number(item.getAttribute("price"));
                        let count = document.getElementById(entry[0]).value;
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
})(dataStructures || (dataStructures = {}));
//# sourceMappingURL=main.js.map