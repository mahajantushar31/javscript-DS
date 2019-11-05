
// function havinf k value pair pointer to next elemnet

function Entry(k,v){
    this.key=k;
    this.value=v;
    this.next=null;
}

// control struture to hold the enries & multiple 
function HashTable(s){
    this.size=s;  // size init
    // table inint
    this.table=new Array(this.size); 
    // hash 

    HashTable.prototype.hash=function(k){
    return k%this.size;
    }
    //inset element
    HashTable.prototype.put=function(k,val){
        var offset=this.hash(k);
        

        if (this.table[offset]==null){
            var newEntry=new Entry(k,val);
            this.table[offset]=newEntry;
            return;
        }

        for (let e=this.table[offset];e!=null;e.next){
            if (e.k==k){
                e.value=val;
                return;
            }
        }
        var newEntry=new Entry(k,val);
        newEntry.next=this.table[offset];
        this.table[offset]=newEntry;
        return;
    }

    // get
    HashTable.prototype.get=function(k){    
        var offset=this.hash(k);
        if (this.table[offset]==null){
            return null;
        }

        for (let current=table[offset];current!=null;current=current.next){
            if (current.key==k){
                return current.value;
            }       
        }
        // no elemt found
        return ;
    }
}

var ht=new HashTable(5);
ht.put(45);
ht.put(15);
ht.put(52);
var a=ht.get(15);
alert(" "+a);
console.log(" get "+a);