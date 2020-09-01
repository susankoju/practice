

class ThreadImplement implements Runnable{
    public void run(){
	for(int i = 0; i< 20; i++){
	    System.out.println(i);
	    try{
		Thread.sleep(20);
	    }
	    catch(Exception e){
		System.out.println("Exception");
	    }
	}
    }

    public static void main(String args[])
    {
	ThreadImplement im = new ThreadImplement();
	Thread t1 = new Thread(im);
	t1.start();
	for(int i = 50; i< 70; i++){
	    System.out.println(i);
	    try{
		Thread.sleep(20);
	    }
	    catch(Exception e){
		System.out.println("Exception");
	    }
	}
	
    }
}
