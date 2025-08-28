class Nodee<T>{
    public value:T;
    public next:Nodee<T>|null;
    constructor(value:T){
        this.value=value;
        this.next=null;
    }
}

class LinkedList<T>{
    private head:Nodee<T>|null;
    constructor(){
        this.head=null;
    }
    append(value:T):void{
        const newNodee=new Nodee(value);
        if(!this.head){
            this.head=newNodee;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNodee;

    }

    printList(){
        let current=this.head;
        let result="";
        while(current){
            result+="->"+current.value;
            current=current.next;
        }
        console.log(result+"->null");
    }
}

function toLinkedList<T>(arr:Array<T>):LinkedList<T>{
    const linkedList=new LinkedList<T>();
    arr.forEach((el)=>linkedList.append(el))
    return linkedList;
}

const arr2=[1,2,3,4,5,6]
let myLinkedList=new LinkedList<number>();
myLinkedList=toLinkedList(arr2);
myLinkedList.printList();