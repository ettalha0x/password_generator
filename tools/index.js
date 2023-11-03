// Import functions from "variations.js"
import { getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized } from "./variations.js";

// Get references to DOM elements
const GeneratButton = document.querySelector("#GeneratButton");
const website = document.querySelector("#website");
const GeneratedPasswd = document.querySelector("#GeneratedPasswd");
const key1 = document.querySelector("#key1");
const key2 = document.querySelector("#key2");
const key3 = document.querySelector("#key3");

// Listen for changes in the "website" input field
GeneratButton.addEventListener("click", function() {
    // Get the values of the input fields
    const websiteValue = website.value;
    const key1Value = key1.value;
    const key2Value = key2.value;
    const key3Value = key3.value;

    // Check if all input fields have values
    if (websiteValue && key1Value && key2Value && key3Value) {
        // Generate the password and set it in the "GeneratedPasswd" element
        GeneratedPasswd.textContent = key1Value + getCapitalized(getFirstChar(websiteValue) + getLastChar(websiteValue)) + "pwd" + key2Value + key3Value;
    } else {
        // Clear the "GeneratedPasswd" element if any input is missing
        GeneratedPasswd.textContent = "";
    }
});
