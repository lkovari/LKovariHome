import { IOperationParametersAndResult } from "./operation-parameters-and-result.interface";

export class OperationParametersAndResult implements IOperationParametersAndResult {
    operands: number[];
    result: number;

    constructor(result: number, operands: number[]) {
       this.result = result;
       this.operands = operands; 
    }
}