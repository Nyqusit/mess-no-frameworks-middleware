# mess-no-frameworks-middleware
A simple messaging app built with node js. No frameworks or middleware are used

I tried to make the most bare-bones messaging app that I could.The only bug that I noticed was the recreation of messsages when you refresh the page. 

I decided to use my ipv4 address for the ip so I could open it on multiple computers at my residence so you will need to change 
"10.0.0.114" in the listen function to your ipv4 adress or 127.0.0.1.

You will need launch the js file with node.js to run this app.

once the app is running through node.js you can open it in your browser with your ip address followed by ":3000" that represents the port number.

there are two users already created; jane and bill. to start you will need to login. 

to login as jane you will need to type "jane" in the left-most input box and then "4321" in the box next to it.

to login as bill you will need to type "bill" in the left-most input box and then "1234" in the box next to it.

once you are logged in a input box will show up at the top of the page. you can write a messge and press enter to send it as the user you signed in as.

you can click the logout button at the right of the page to logout. if you you logout you can choose to login as a different user.


