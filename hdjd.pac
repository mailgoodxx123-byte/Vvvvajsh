
var isActive = 1;
function FindProxyForURL(url, host , https){


var DIRECT = "1.1.1.1";
return DIRECT;


}
{
    // debug
        // alert("checking: url=" + url + ", host=" + host);
            // Excellent kludge from Sean M. Burke:
                // Enable or disable no-ads for the current browser session.
                    //
                        // To disable, visit this URL:		http://no-ads.int/off
                            // To re-enable, visit this URL:		http://no-ads.int/on
                                //
                                    // (this will not work with Mozilla or Opera if the alert()s are present)
                                        //
                                            // This happens before lowercasing the URL, so make sure you use lowercase!
                                                //
                                    

                                                    if (shExpMatch(host, "no-ads.int")) {
                                                            if (shExpMatch(url, "*/on*")) {
                                                            	    isActive = 1;
                                                                    	    //alert("no-ads is enabled.\n" + url);
                                                                            	} else if (shExpMatch(url, "*/off*")) {
                                                                                	    isActive = 0;
                                                                                        	    //alert("no-ads has been disabled.\n" + url);
                                                                                                	} else if (shExpMatch(url, "*no-ads.int/")) {
                                                                                                    	    alert("no-ads is "+(isActive ? "enabled" : "disabled")+".\n" + url);
                                                                                                            	} else {
                                                                                                                	    alert("no-ads unknown option.\n" + url);
                                                                                                                        	}
                                                                                                                            	return blackhole;
                                                                                                                                    }
                                                                                                                                        if (!isActive) {
                                                                                                                                        	// alert("allowing (not active): return " + bypass);
                                                                                                                                            	return bypass;


                                                                                                                                                
                                                                                                                                        }