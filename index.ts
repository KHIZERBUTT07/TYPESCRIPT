let myBatch: string = "SMIT-BATCH-11-MWF-9-11";
let totalStidents: number = 500;
let isActive: boolean = true;
let topic: Array<string> = ["HTML","CSS","JAVASCRIPT"];
let topic: (string | number)[] = ["HTML","CSS","JAVASCRIPT"];
let weeksPerSubject: number[]  = [12,312,2132,];

interface BATCH {
    batchName:string
    studentAge:number
    isRegular:boolean
}

const batch_11 : BATCH = {
    batchName: "SMIT-BATCH-11-MWF-9-11",
    studentAge: 18 ,
    isRegular: true ,

};
console.log(batch_11)