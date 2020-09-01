
import java.net.URL;

class HelloWorld{
    public static void main(String[] args){
	ClassLoader classLoader = getClass().getClassLoader();
	URL file = classLoader.getResource("hello.txt");
	//for(String line: file.lines()){
	    System.out.println(">"+file);
	    //}
    }
}
