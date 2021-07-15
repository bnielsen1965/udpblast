# udpblast

A simple NodeJS application that sends a sequence of JSON messages using
discrete UDP packets.


# netcat receiver

Run netcat on a *nix flavored OS to create a receiver for the udpblast packets...

Listen on port 8000 and keep alive for multiple packets
> netcat -ulk 8000
