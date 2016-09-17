import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
	// HTTP.call( 'GET', 'https://api.coinmarketcap.com/v1/ticker/bitcoin/', {}, function( error, response ) {
	//   if ( error ) {
	//     console.log( error );
	//   } else {
	//     console.log( response );
	    
	//      This will return the HTTP response object that looks something like this:
	//      {
	//        content: "String of content...",
	//        data: Array[100], <-- Our actual data lives here. 
	//        headers: {  Object containing HTTP response headers }
	//        statusCode: 200
	//      }
	    
	//   }
	// });

	if (Meteor.isServer) {
	    Meteor.methods({
	        pullCoinData: function () {
	            this.unblock();
	            return Meteor.http.call("GET", "https://www.quandl.com/api/v1/datasets/BAVERAGE/USD.json");
	            // return Meteor.http.call("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoin/");
	        }
	    });
	}


});
