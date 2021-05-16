class DbManager {
    private static instance: DbManager;
    public static getIntance(){
        if(!this.instance){
            this.instance  = new DbManager();
        }
        return this.instance;
    }
}
// clint code
class Main{
    public  run(){
        const dbManager1 =  DbManager.getIntance();
        const dbManager2 =  DbManager.getIntance();
        if(dbManager1 === dbManager2){
            console.log('--> Both are instances of a singleton class!');            
        }
        //call your db operation on instance 
    }
}
console.log(new Main().run());