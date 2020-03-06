// exec (vp) : v + p
// v : Command-line arguments are passed to the function as an array (vector) of pointers
// p : Uses the PATH environment variable to find the file named in the file > argument to be executed.

#include<unistd.h>
#include<stdlib.h>

void main() {
  char *args[] = {"myscript.sh", (char*) 0};
  execvp( "myscript.sh",args);
  exit(0);
}
