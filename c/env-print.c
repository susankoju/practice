#include<stdio.h>

main(argc, argv, envp)
int argc;
int *argv[];
int *envp[];
{
  int i;
  for(i = 0; envp[i] != (char *) 0; i++)
    printf("%s\n", envp[i]);
  exit(0);
}
