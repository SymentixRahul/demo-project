function Main() 
{
    let arr = [1,2,3,4,5];
    arr.push(4);
    console.log("after push:")
    for(let a=0;arr[a]!=null;a++)
    console.log(arr[a]);
    console.log("after pop:");
    arr.pop();
    for(let a=0;arr[a]!=null;a++)
    console.log(arr[a]);
    arr.shift();
    console.log("after shift:")
    for(let a=0;arr[a]!=null;a++)
    console.log(arr[a]);
    arr.unshift(1);
    console.log("after unshift:")
    for(let a=0;arr[a]!=null;a++)
    console.log(arr[a]);

}    
Main();