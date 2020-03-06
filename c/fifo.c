#include<stdlib.h>
#include<unistd.h>
#include<sys/stat.h>
#include<errno.h>
#include<stdio.h>
int main()
{
  int res;
  res= mkfifo("/tmp/fifofile", S_IRWXU); //STAT INODE READ WRITE EXECUTE USER
  if(res == 0)
    printf("FIFO created. \n");
  else if(res < 0) {
    if(errno == EEXIST)
      printf("Already Exists.");
    else
      exit(0);
  }
  
}
