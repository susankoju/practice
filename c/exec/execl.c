// exec (l) : command-line arguments are passed individually (a list) to the function
#include<unistd.h>

int main()
{
	execl("/home/luser/Desktop/Folder/practice/c/myscript.sh","myscript.sh",(char *)0);
}
