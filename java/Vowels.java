
import java.util.*;

public class Vowels{
    public static void main(String[] args){

	Scanner scan = new Scanner(System.in);

	String name = scan.nextLine();
	char[] vowel = {'a','e','i','o','u'};
	int v = 0, c=0;

	for(int i=0; i<name.length(); i++){	    
	    for(int j=0;j<vowel.length;j++)
		if(vowel[j]==name.charAt(i))
		    v++;
	}
	System.out.println("Vowel: "+v+", Cons: "+(name.length()-v));
    }
}
