# A small static server with a very simple Signup/Login form 

Small example of a static NodeJS server with a simple webpage, which makes an AJAX POST request to send data from a form.
The form is a very basic system to Signup/Login. It sends the username, email and password in a POST request.

## Usage

First of all, you need to install nodemon and other needed libraries using:
```bash
npm install
```
in the root directory.

Once you've done this, to start the server you only need to type:
```bash
npm test
```
in your terminal. The server will start at port 9000. You can change this value in the code, if needed.
Then, navigate to localhost/9000 and the index.html webpage will appear.
Insert the data into the input textboxes and hit send. The data will appear in a div, below the form.
