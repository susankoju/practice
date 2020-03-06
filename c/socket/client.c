#include<stdio.h>
#include <sys/types.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<netdb.h>

void error(char *msg)
{
  perror(msg);
}

int main(int argc, char *argv[]){
  int sockfd, portno, n;

  struct sockaddr_in serv_addr;

  return 0;
}
