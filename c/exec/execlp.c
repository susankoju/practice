// exec (lp) : l + p
// l : Command-line arguments are passed individually (a list) to the function
// p : Uses the PATH environment variable to fine the file amed in the file > argument to be executed.

#include<unistd.h>
#include<stdlib.h>

void main() {

  execlp("myscript.sh","",(char *)0);
  exit(0);

}
