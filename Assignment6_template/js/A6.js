//Seungmin Yun 010820132 WEB- SEE

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

httpRequest = new XMLHttpRequest();
window.onload = makeRequest(1);




function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	

	var url = "https://reqres.in/api/users?page=" +pageNum;//api server will give you data back from the source


	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var data = document.getElementById('data');
			data.innerHTML = ""; //empty state
			let i = 0;
			for(i = 0; i < jsData.data.length; i++){
				var row = document.createElement('tr');
				var id = document.createElement('td');
				var fname = document.createElement('td');
				var lname = document.createElement('td');
				var pic = document.createElement('td');
				

				var pageId = document.createElement('p');
				pageId.textContent = jsData.data[i].id;
				id.appendChild(pageId);

				var pagefname = document.createElement('p');
				pagefname.textContent = jsData.data[i].first_name;
				fname.appendChild(pagefname);

				var pagelname = document.createElement('p');
				pagelname.textContent = jsData.data[i].last_name;
				lname.appendChild(pagelname);

				var pageimg = document.createElement('img');
				pageimg.src = jsData.data[i].avatar;
				pic.appendChild(pageimg);

				row.appendChild(id);
				row.appendChild(fname);
				row.appendChild(lname);
				row.appendChild(pic);

				data.appendChild(row);
			}
		} else {
			console.log('There was a problem with the request.');
		}
	}
}	