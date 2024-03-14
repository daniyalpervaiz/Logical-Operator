//Logical operator(AND &&),(OR ||),(NOT !)
let a: number = 10
let b: number = 5
let c: string = "5"
//@ts-ignore
console.log((b != c) || (b === c));//false
//false||false

let d: number = 10
let e: number = 5
let f: string = "5"
//@ts-ignore
console.log((d != f) && (e == f));//true
//true&&true

let g: number = 25
let h: number = 10
let i: string = "5"
//@ts-ignore
console.log((h < g) || (h == i));//true
//true||false

let j: number = 25
let k: number = 10
let l: string = "5"
//@ts-ignore
console.log((j === k) && (k != l)); //false        
//false&&true

let m:number=20
let n:number=20
let o:string="8"
//@ts-ignore
console.log(!((m<=n)||(m!==o)));//false
            //!((true)||(true))
