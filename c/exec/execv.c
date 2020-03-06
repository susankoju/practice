// exec (v) : command-line arguments are passed to the function as an array(vector) of pointers
#include<unistd.h>
#include<stdlib.h>

int main()
{
  char *arg[] = {"myscript.sh", (char *)0};
  execv("/home/luser/Desktop/Folder/practice/c/myscript.sh",arg);
  exit(0);
}
