import { IStack } from "./stack.interface";

export class Stack<T> implements IStack<T> {
    private itemStorage: T[] = [];

    constructor(private capacity: number = Infinity) {
        // Nothing to do    
    }
    peekBy(itemIndex: number): T | undefined {
        return this.itemStorage[itemIndex];
    }
    
    clear(): void {
        this.itemStorage.splice(0, this.itemStorage.length);
        // this.itemStorage.length = 0;
        // this.itemStorage = [];
    }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Error: The Stack has reached maximum Capacity!");
        }        
        this.itemStorage.push(item);
    }

    pop(): T | undefined {
        return this.itemStorage.pop();
    }

    peek(): T | undefined {
        return this.itemStorage[this.size() - 1];
    }


    size(): number {
        return this.itemStorage.length;    
    }
}