
import java.util.Scanner;
import java.lang.Math;

class Armstrong{

    public static void main(String[] args){
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt();
	int bkup = n, sum = 0, rem = 0;
	while(n>0){
	    rem = n % 10;
	    sum += Math.pow(rem, 3);
	    n = n / 10;
	}
	if(sum == bkup)
	    System.out.println("Armstrong");
    }
}
