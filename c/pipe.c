#include<stdio.h>
#include<unistd.h>
#include<stdlib.h>
#include<sys/wait.h>

void main()
{
  int pipe1[2], pipe2[2];
  pid_t childpid;

  // step 1 : create pipe1 and pipe2
  if( pipe(pipe1) < 0 || pipe(pipe2) < 0)
    perror("Error creating pipes");

  // step 2 : fork a child process
  if((childpid=fork()) < 0)
    {
      perror("Can't fork");
    }
  // step 3 : parent closes the read end of pipe1 and write end of pipe2
  else if(childpid > 0)
    {
      close( pipe1[0]);
      close( pipe2[1]);
      //client(pipe2[0], pipe1[1]); // client runs in the parent
      printf("Writing from parent");
      write(pipe1[1], "Hello from parent", 20);
      //while(wait((int *)0) != childpid); //wait for child
      close( pipe1[1]);
      close(pipe2[0]);
      exit(0);
    } else {
    // step 4 : child closes the write end of pipe1 and read end of pipe2
    close( pipe1[1]);
    close( pipe2[0]);
    //server( pipe1[0], pipe2[1]); // server runs in the child process
    char txt[20];
    read(pipe1[0],txt,20);
    printf("%s",txt);
    close(pipe1[0]);
    close(pipe2[1]);
    exit(0);
  }
}
