// exec (ve) : v + e
// v : Command-line arguments are passed to the function as an array (vector ) of pointers
// e : An array of pointers to environment variable is expicitly passed to the > new process image

#include<unistd.h>
#include<stdlib.h>

void main(){
  char *args[] = {"myscript.sh",(char*)0};
  char *envp[] = {"NAME=NEPAL"};
  execve("/home/luser/Desktop/Folder/practice/c/myscript.sh",args,envp);
}
