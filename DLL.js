/*
 * Filename: d:\Test-WorkSpcaeJS\test.js
 * Path: d:\Test-WorkSpcaeJS
 * Created Date: Monday, October 15th 2018, 12:09:34 pm
 * Author: tushar.mahajan
 * 
 * Copyright (c) 2018 Your Company
 */

function node (v){
    this.value=v;
    this.next=null;
    this.prev=null;
  }
  
  function DLL(){
      this.head=null;
      this.tail=null;
      
  
      DLL.prototype.addToFront=function(v){
          let fresh=new node(v);
          if (this.head==null){
            this.head=fresh;
            this.tail=fresh;
          }else{
            fresh.next=this.head;
            fresh.next.prev=fresh;
            this.head=fresh;
          }
      }
  
      DLL.prototype.addToBack=function(v){
          let fresh=new node(v);
          if(this.head==null){
            this.head=fresh;
            this.tail=fresh
          }else{
             fresh.prev=this.tail;
             fresh.prev.next=fresh;
             this.tail=fresh;
          }
      }
  
      DLL.prototype.print=function( head ){
          for (let curr=this.head;curr!=null;curr=curr.next){
              console.log(" "+curr.value);
          }
      }
  }
  
  let shopinglist=new DLL();
  shopinglist.addToBack(4);
  shopinglist.addToBack(2);
  shopinglist.addToBack(5);
  
  shopinglist.addToFront(1);
  shopinglist.addToFront(7);
  shopinglist.print(shopinglist.head);