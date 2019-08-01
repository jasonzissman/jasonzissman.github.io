window.onload = function () {

    var CLIENT_ID = '415923410838-1tpmhtv1qpr1uhbjs13m24jjr4med9at.apps.googleusercontent.com';
    var SCOPES = ['https://mail.google.com/', 'https://www.googleapis.com/auth/gmail.send'];

    var loadGmailApi = function () {
        gapi.client.load('gmail', 'v1', function () {
            console.log("Loaded GMail API");
        });
    }

    var handleAuthResult = function (authResult) {
        if (authResult && !authResult.error) {
            loadGmailApi();
        }
    }

    var token = undefined;
    var getClientRequestHeaders = function () {
        if (!token) {
            token = gapi.auth.getToken();
        }
        
        gapi.auth.setToken({ token: token['access_token'] });
        var authorization = "Bearer " + token["access_token"];
        return {
            "Authorization": authorization,
            "X-JavaScript-User-Agent": "Google APIs Explorer"
        };
    }

    

    var sendMessage = function (message) {
        var headers = getClientRequestHeaders();
        //var path = "gmail/v1/users/me/messages?key=" + CLIENT_ID;
        var path = "gmail/v1/users/me/messages/send?key=" + CLIENT_ID;
        var base64EncodedEmail = btoa(message).replace(/\+/g, '-').replace(/\//g, '_');
        gapi.client.request({
            path: path,
            method: "POST",
            headers: headers,
            body: {
                'raw': base64EncodedEmail
            }
        }).then(function (response) {
            alert("Email sent: " + message);
        });
    }

    

    gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: SCOPES,
        immediate: true
    }, handleAuthResult);

    var sendEmail = function () {
        var content = 'HELLO';

        var sender = 'baystatus.zissman@gmail.com';
        var receiver = 'jason.zissman@gmail.com';
        var to = 'To: ' + receiver;
        var from = 'From: ' + sender;
        var subject = 'Subject: ' + 'HELLO TEST';
        var contentType = 'Content-Type: text/plain; charset=utf-8';
        var mime = 'MIME-Version: 1.0';

        var message = "";
        message += to + "\r\n";
        message += from + "\r\n";
        message += subject + "\r\n";
        message += contentType + "\r\n";
        message += mime + "\r\n";
        message += "\r\n" + content;

        sendMessage(message);
    };

    var sendNotice = function (status) {
        var currentBay = localStorage.getItem('selectedBay');
        sendEmail("Bay " + currentBay + " is reporting status '" + status + "'");
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

