# Lyft Technical Sample
This web application is written in Javascript and takes an input from the user. After the user has entered text into the text box, a POST request method occurs at the /test route on the Node server. After this, a JSON object returns a string containing every third character from the original string. 

# To run the program on your machine
1) Clone the repo to your local machine using the steps outlined below:

https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

2) Once the repo has been cloned, cd into the newly created repository
    \lyft-technical-sample

3) Utilize the following command to install the required packages:
    ```
    npm install
    ```

4) Once the packages have installed open up two command prompts. 

5) On the first command prompt, cd into \lyft-technical-sample\sever and enter the following command 
    ```
    node server.js
    ```
- After entering the above command the command prompt should output "Node Server listening on port 5000". This means the server is established correctly.

6) On the second command prompt cd into \lyft-technical-sample and enter the following command
    ```
    npm start
    ```
- After entering this command, the project should open up in your web browser and the terminal should say "compiled successfully!"

7) You can now enter text into the text box and receive back a new string.