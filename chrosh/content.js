chrome.extension.onRequest.addListener(
	function (request, sender, sendResponse) {
		if (request.greeting == "ls") {
			var rv_object = {};
			
			var links = document.getElementsByTagName("a");
			
			for (var i = 0, _len = links.length; i < _len; i++) {
				if (links[i].hasAttribute("href")) {
					var href = links[i].href;
					var title = links[i].innerHTML.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
					
					rv_object[href] = title;
				}
			}
			
			var rv_array = [];
			
			for (var url in rv_object) {
				rv_array.push({ "href" : url, "title" : rv_object[url] });
			}
			
			sendResponse({ "status": true, "links": rv_array });
		}
		else if (request.greeting == "cd") {
			var a_tag = document.createElement("a");
			a_tag.setAttribute("href", request.path);
			sendResponse({ "status": true, "url": a_tag.href });
		}
		else {
			sendResponse({});
		}
	}
);