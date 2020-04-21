export class CounterService{
    activeCounter = 0;
    inactiveCounter = 0;


    CountActive(){
    this.activeCounter++;
    console.log('Set to inactive ' + this.activeCounter)
    }

    CountInActive(){
        this.inactiveCounter++;
        console.log('Set to active ' + this.inactiveCounter)
    }
}