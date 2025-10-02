# Network
- A system where computers are connected together over different/same geographical locations to communicate (exchange data).

# IP address
- A number that uniquely identifies the computer (client's or server's) over a network.
    - ex: 122.161.72.60

# Port
- A logical address (not physical) that each computer has, and is used by programs/softwares to exhange information.
- Specifies which program/service on a computer is going to be used.
    - range: 0-65535 (2^16)
    - 0-1023: wellknown ports (Reserved for system-level services, http:80, https:443, ftp:21)
    - 1024-49151: registered ports (Assigned for application-level services, express:3000)
    - 49152-65535: dynamic ports (Temporarily assigned to client-side connections)
- Always associated with an IP. 
    - ex: 122.161.72.60:3000
- Working:
    - say you send a request (5.6.7.8:25) to a server from client (using browser).
    - first request reaches server computer at 5.6.7.8
    - then on the server it specifies that email service is required, defined by port 25
    - When your client (browser) establishes a connection, your OS assigns a random ephemeral port for that session to your program (by port) on your machine (by IP).
    - Client (Your Machine): 122.161.72.60:49158 and Server (Mail Service): 5.6.7.8:25
    - This port pairing uniquely identifies the session between your client (browser) and the server.

# Clarity on ports
- If we only had IP addresses, how would the computer know which program/service should handle the request?
- ip is the apartment and port is the flat number OR ip = tv provider Tatasky and port = HBO channel
- IP = Identifies the computer.
- port = Identifies which program/service inside that computer.
    - data exchange (networking) but of what kind? file, webpage, email, etc. (port)
- A single computer can have many services running on different ports.
- Ports are necessary to separate different programs using the same IP.
- 'regular programs' vs 'network programs'
    - regular s/w can be more than 65k on a single IP machine (those that don't connect to other machines)
        - ex: Notepad, Calculator, Photoshop, single-player games
    - netword s/w are limited by 65536 ports on a single IP machine
        - Web servers, multiplayer games, video calls, downloads. So you can only open 65536 online games at once on one computer.
## Why the number isn't small
- Server: A single port != a single user. One port can handle thousands of users using sockets.
- Client: Uses Ephemeral Ports, But They Get Reused. Unless you’re making 65,536 connections at the exact same time.