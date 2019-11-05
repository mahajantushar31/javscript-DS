function Node(val){

    this.value=val;
    this.next=null;
}
function List(){
    this.head=null;
    this.tail=null;

    List.prototype.addToBack=function(val){
        let fresh=new Node(val);
        if(this.head==null){
            this.head=fresh;
        }else{
            this.tail.next=fresh
        }
        this.tail=fresh;
    }

    List.prototype.printForward=function(){
        for (let current=this.head;current!=null;current=current.next){
            console.log(current.value);
        }   
    }
}
var bucketList=new List();
var shoppingList=new List();
bucketList.addToBack(5);
bucketList.addToBack(6); 
bucketList.addToBack("abc"); 
bucketList.addToBack(0.2); 
bucketList.addToBack(true); 
bucketList.printForward();

