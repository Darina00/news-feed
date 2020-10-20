# React application for viewing news feed

    The application consists of two parts: public and secure.
    
    Public part: viewing news with a short description, when you click on the news, go to the full description.

    The protected part is only available to users who are logged in. 
    If the user entered an incorrect username or password, an error message will be displayed. 
    
    Protected news is available only to users who are logged in.
    
    When the user has successfully logged into the system, the user's ID is recorded in the localstorage and the "login" icon in the header changes to "logout". 
    
    When you click on the "logout" icon in the header, the user's ID is removed from the localstorage.
    
    If you try to enter an invalid URL, a corresponding error message is displayed.

To run the command ***yarn start***
