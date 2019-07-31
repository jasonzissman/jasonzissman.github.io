window.onload = function() {
    var apiKey = 'AIzaSyDwkMohfFnl99NITL5shWQlE2GscO4F6_g';
    gapi.client.setApiKey(apiKey);
    gapi.client.load('gmail', 'v1');
    
    var sendNotice = function (status) {
        var currentBay = localStorage.getItem('selectedBay');
        var clientId = '415923410838-1tpmhtv1qpr1uhbjs13m24jjr4med9at.apps.googleusercontent.com';
        // var clientSecret = 'evZXcndltCspo6G4Zgp_XKoR';
    
        var email = '';
    
        var headers = {
            'To': "jason.zissman@gmail.com",
            'Subject': "I am testing this new API"
        };
        for (var header in headers) {
            email += header += ": " + headers[header] + "\r\n";
        }
    
        email += "\r\n" + "Hi!!";
    
        var sendRequest = gapi.client.gmail.users.messages.send({
            'userId': 'me',
            'resource': {
                'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
            }
        });
    
        sendRequest.execute();   
    }

    document.getElementById("button-green").onclick = function () {
        sendNotice("Green");
    };
    document.getElementById("button-orange").onclick = function () {
        sendNotice("Orange");
    };
    document.getElementById("button-blue").onclick = function () {
        sendNotice("blue");
    };
    document.getElementById("button-yellow").onclick = function () {
        sendNotice("yellow");
    };
    document.getElementById("button-red").onclick = function () {
        sendNotice("red");
    };
    document.getElementById("button-checkered").onclick = function () {
        sendNotice("checkered");
    };
    
    var baySelect = document.getElementById("bay-selector");
    baySelect.onchange = function () {
        var selectedBay = baySelect.options[baySelect.selectedIndex].value;
        localStorage.setItem('selectedBay', selectedBay);
    };
    
    var selectedBayFromLocalStorage = localStorage.getItem('selectedBay');
    if (selectedBayFromLocalStorage) {
        baySelect.value = selectedBayFromLocalStorage;
    }
};

