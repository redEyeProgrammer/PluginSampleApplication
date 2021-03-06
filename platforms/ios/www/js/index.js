/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
initialize: function () {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    //app.receivedEvent('deviceready');
    document.getElementById("bookmarkBtn").onclick = app.addBookmark;
    document.getElementById("requestBtn").onclick = app.makeRequest;
},
    
    // Update DOM on a Received Event
receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    
    console.log('Received Event: ' + id);
},
    
makeRequest: function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://jsonplaceholder.typicode.com/users/1", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    alert(response)
},
    
addBookmark: function() {
    console.log("Called add bookmark");
    var win = function(d) {
        console.log("Bookmark added!");
    };
    var fail = function(e) {
        console.log(e)
    }
    var bookmark = document.getElementById("bookmark").value
    if (!document.getElementById("bookmark").value) {
        alert("Text Empty");
    } else {
        cordova.exec(win, fail, "MyHybridPlugin", "addBookmark", [bookmark]);
        alert("BookMark Added");
        document.getElementById("bookmark").value = "";
        
    }
}
    
    
};

app.initialize();
