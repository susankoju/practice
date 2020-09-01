class ThreadClass extends Thread{
    public void run(){
	for(int i = 0; i < 20; i++){
	    System.out.println(i);
	    try{
		Thread.sleep(20);}
	    catch(InterruptedException ex){
		System.out.println("a");
	    }
	}
    }

    public static void main(String[] args) throws InterruptedException{
	ThreadClass t1 = new ThreadClass();
	t1.start();
	for(int i = 50; i<70; i++){
	    System.out.println(i);
	    Thread.sleep(20);
	}
    }
}
