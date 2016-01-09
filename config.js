var config = {
  newLocation: "http://www.example.com/",  // The new location to redirect to
  redirectAfter: 3, // Number of second to wait before redirect
 /* The message to be displayed. (\n will be replaced by <br>)
    ##newLocation## represents the new location
    ##countDown## represents the remaining number of seconds before redirecting */
  message: 'This site has been moved to <a href="##newLocation##">##newLocation##</a>.\n \
            You will be redirected in ##countDown## seconds.'
};
