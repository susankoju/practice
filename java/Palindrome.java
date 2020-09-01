
import java.util.Scanner;

class Armstrong{

    public static void main(String[] args){
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt();
	int bkup = n, rev = 0, rem = 0;
	while(n>0){
	    rem = n % 10;
	    rev = rev * 10 + rem;
	    n = n / 10;
	}
	System.out.println(rev);
	if(rev == bkup)
	    System.out.println("Armstrong");
}
}
