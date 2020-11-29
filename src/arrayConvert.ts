export function arrayConvert<T>(arr:T[]):T[]|T{
    if(arr.length==1)return arr[0];
    else return arr;
}