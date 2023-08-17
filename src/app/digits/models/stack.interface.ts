export interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    peekBy(itemIndex: number): T | undefined;
    size(): number;
    clear(): void;
}