import socket

target_host = "www.facebook.com"
target_port = 80

#socket obj
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#connect
client.connect((target_host, target_port))
#client.send("GET / HTTP/1.1\nHost: google.com\n \n")
client.send("GET / HTTP/1.1\r\nHost: facebook.com\r\n\r\n")

response = client.recv(4096)

print response
