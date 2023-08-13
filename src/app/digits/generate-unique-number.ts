export class GenerateUniqueNumber {
    private numbers: number[] = [];

    public generateNumber(min: number, max: number) {
        let number = Math.floor(min + Math.random() * (max - min + 1));
        while (this.numbers.indexOf(number) >= 0) {
            number = Math.floor(min + Math.random() * (max - min + 1));
        }
        this.numbers.push(number);
    }

    public getGeneratedNumbers(): number[] {
        return this.numbers;
    }

    public clearGeneratedNumbers() {
        this.numbers = [];
    }
}