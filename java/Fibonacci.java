

import java.util.Scanner;

class Fibonacci{
    public static void main(String[] args){
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt();

	fibonacci(1,0,0,n);
	
    }

    public static void fibonacci(int last, int secondLast, int count, int total){
	if(count == total){
	    return;
	} else {
	    System.out.print(" "+last);
	    fibonacci((last+secondLast), last, count+1, total); 
	}
    }
}
