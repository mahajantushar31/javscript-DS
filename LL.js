
function Node(v){
    this.value=v;
    this.next=null;
 }
 function List(...args){
     
     this.head=new Node(0);
     this.tail=new Node(0);  
     this.head.next=this.tail;
 
     List.prototype.add=function(...args){
         for (let val of args){
         let fresh=new Node(val);
         fresh.next=this.head.next;
         this.head.next=fresh;
          
         }
     } 
     List.prototype.print=function(){
         for (let curr=this.head.next;curr!=null;curr=curr.next){
             console.log(" "+curr.value);
         }
     }
 }
 
 let list =new List();
 list.add(5);
 list.add(15);
 list.print();
 
 
 