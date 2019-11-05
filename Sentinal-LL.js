/*
 * Filename: e:\DataStructers\Sentinal-LL.js
 * Path: e:\DataStructers
 * Created Date: Thursday, October 18th 2018, 8:45:04 pm
 * Author: tushar mahajan
 * 
 * Program For: Sentinal Linked List
 * History: 18/10/2018 Created(addToBack,AddToFront,PrintForward) 
 *          
 * Copyright (c) 2018 Your Company
 */

// BASIC NODE 
function node(v){
    this.value=v;
    this.next=null;
    this.prev=null;
}
//sentinal
function SLL(){
    this.head=new node();
    this.tail=new node();
    //SLL=function(){
        this.head.next=this.tail;
        this.tail.prev=this.head;
    //}

  SLL.prototype.addToFirst=function(v){
        let fresh=new node(v);
        if (this.head.next==this.tail){
            
            fresh.prev=this.head;
            fresh.next=fresh.prev.next;
            fresh.prev.next=fresh;
            fresh.next.prev=fresh;
        }else{
            fresh.next=this.head.next;
            fresh.prev=fresh.next.prev;
            fresh.prev.next=fresh;
            fresh.next.prev=fresh;
        }
    }  

    SLL.prototype.addToBack=function(v){
        let fresh=new node(v);
        if (this.tail.prev==this.head){
            fresh.next=this.tail;
            fresh.prev=fresh.next.prev;
            fresh.next.prev=fresh;
            fresh.prev.next=fresh;
        }else{
            fresh.next=this.tail;
            fresh.prev=fresh.next.prev;
            fresh.prev.next=fresh;
            fresh.next.prev=fresh;
        }
    }

    // prototype will make this function available 
    pychara.printForward=function(){

        
        for (let curr=this.head.next;curr!=this.tail;curr=curr.next){
            console.log("print  "+curr.value);
        }
    }


}

// SENTINAl SINGALY LINKED LIST
let shopingList=new SLL();
shopingList.addToFirst(5);
shopingList.addToBack(6);
shopingList.addToBack(3);
shopingList.addToBack(1);
shopingList.addToBack(8); 
shopingList.printForward();
