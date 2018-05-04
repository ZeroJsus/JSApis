//Iterator 
    //类Iterator构造
class RangeIterator {
    constructor(start,stop) {
        this.value = start
        this.stop = stop
    }

    [Symbol.iterator](){return this}

    next() {
        let value = this.value
        if (value < this.stop){
            this.value++
            return { done: false, value: value }
        }
        return { done: false, value: undefined}
    }
}

function range(start, stop){
    return new RangeIterator(start, stop)
}

for (const iterator of range(0,3)) {
    console.log(iterator);
}