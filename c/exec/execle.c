// exec (le) : l + e
// l : Command-line arguments are passed individually (a list) to the function
// e : An array of pointers to environment variables is expicitly passed to the > new process image


#include<unistd.h>
#include<stdlib.h>

void main () {
  char *env[]={"PATH=/home/luser/Desktop/Folder/practice/c"};
  execle("/home/luser/Desktop/Folder/practice/c/myscript.sh","myscript.sh",(char *)0,env);
  exit(0);
}
