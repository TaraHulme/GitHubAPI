'use strict';

function getResults(formData){
fetch(`https://api.github.com/users/${formData}`)
.then(response => {
    console.log(response);
    return response.json();
})
.then(responseJson => {
    if (responseJson.status == "error") {
        console.log(responseJson.status);

    } else if (responseJson.status == "200") {
        console.log(responseJson.status);
        return displayResults(responseJson);
    } else {
        console.log(error);
    }
})
.catch(err =>  (`Something went wrong: ${err.message}`));

}

function displayResults(responseJson) {
    console.log("display results function!");
    return $('#results').append(`<p>${responseJson.login}</p>
    <p>${responseJson.html_url}</p>`);

    // $('#results').removeClass('hidden');
};

function watchForm() {
    console.log("watchForm is being reached");
    $('form').submit(e => {
        $('#results').empty();
        event.preventDefault();

        const formData = $('#js_user_name', this)
        console.log("user input:",formData.val());

        getResults(formData.val());
    });
} 
$(function() {  
    console.log('App loaded! Waiting for submit!');  
    watchForm();
    }); 