//
//
// //initialize ui components fro ui
// var refreshButton = document.querySelector('.refresh');
// var closeButton1 = document.querySelector('.close1');
// var closeButton2 = document.querySelector('.close2');
// var closeButton3 = document.querySelector('.close3');
//
//
// //initialize streams for all interactions: refresh, and individual
// //close operations
// var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');
// var close1ClickStream = Rx.Observable.fromEvent(closeButton1, 'click');
// var close2ClickStream = Rx.Observable.fromEvent(closeButton2, 'click');
// var close3ClickStream = Rx.Observable.fromEvent(closeButton3, 'click');
//
// //request stream initalization
// var requestStream = refreshClickStream.startWith('startup click')
//     .map(function() {
//         var randomOffset = Math.floor(Math.random()*500);
//         return 'https://api.github.com/users?since=' + randomOffset;
//     });
//
// //response stream initalization
// var responseStream = requestStream
//     .flatMap(function (requestUrl) {
//         return Rx.Observable.fromPromise($.getJSON(requestUrl));
//     });
//
// //suggestion stream function
// function createSuggestionStream(closeClickStream) {
//     return closeClickStream.startWith('startup click')
//         .combineLatest(responseStream,
//             function(click, listUsers) {
//                 return listUsers[Math.floor(Math.random()*listUsers.length)];
//             }
//         )
//         .merge(
//             refreshClickStream.map(function(){
//                 return null;
//             })
//         )
//         .startWith(null);
// }
//
// //initalize suggestion streams individually (good excercise to remove repetition)
// var suggestion1Stream = createSuggestionStream(close1ClickStream);
// var suggestion2Stream = createSuggestionStream(close2ClickStream);
// var suggestion3Stream = createSuggestionStream(close3ClickStream);
//
//
// // Rendering ---------------------------------------------------
// function renderSuggestion(suggestedUser, selector) {
//     var suggestionEl = document.querySelector(selector);
//     if (suggestedUser === null) {
//         suggestionEl.style.visibility = 'hidden';
//     } else {
//         suggestionEl.style.visibility = 'visible';
//         var usernameEl = suggestionEl.querySelector('.username');
//         usernameEl.href = suggestedUser.html_url;
//         usernameEl.textContent = suggestedUser.login;
//         var imgEl = suggestionEl.querySelector('img');
//         imgEl.src = "";
//         imgEl.src = suggestedUser.avatar_url;
//     }
// }
//
// //stream subscribing
//
// suggestion1Stream.subscribe(function (suggestedUser) {
//     renderSuggestion(suggestedUser, '.suggestion1');
// });
//
// suggestion2Stream.subscribe(function (suggestedUser) {
//     renderSuggestion(suggestedUser, '.suggestion2');
// });
//
// suggestion3Stream.subscribe(function (suggestedUser) {
//     renderSuggestion(suggestedUser, '.suggestion3');
// });
//
//
// //response stream
// var responseStream = requestStream
//     .flatMap(function(requestUrl) {
//         return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
//     });
//
// //response stream subscribing
// responseStream.subscribe(function(response){
//     //...
// });
