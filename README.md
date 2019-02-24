# Boats Server

Part of a project by Tra Bouscaren and Grayson Earle.

Facilitates communication to and from individual boats. The server runs on Node.js and uses OSC to communicate with individual boats. Each boat has a Raspberry Pi and an Arduino attached. The Pi uses the Arduino as a means of controlling the motors. Eventually the server will also pipe video and other content to and from the boats.

# To run

1. npm install
2. node server.js
3. web browser -> 127.0.0.1:3000

Attach a servo to pin 8 on the Arduino, as outlined over at the [Boat repository](https://github.com/prismspecs/boat)

The Boat (pi) should run the OpenFrameworks app to begin listening
