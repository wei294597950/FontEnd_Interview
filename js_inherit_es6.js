
class father{
    constructor(name){
        this.name = name;
    }
    dosomething(){
        console.log('father do');
    }
    saysomething(){
        console.log('parent name',this.name)
    }
}


class child extends father{
    constructor(name){
        super();
        this.name = name;
    }
    saysomething(){
        console.log('child name',this.name);
    }
}


const child1 = new child('xuwei','father')

child1.dosomething()
child1.saysomething();