import { useState } from "react";

let Counter = function(){
    // let count=0; 
    //its now in state of component
    //useState
    let [count, setCount] = useState(0);
    let[movieName, setMovieName]=useState('Avengers'); //initian value in "movieName is in the bracketts"

    function handleIncrement(){
       // count++; //dont use the variable directly, INSTEAD ->
    //    setCount(count=count +1); // count++ is post-increment, so give initial value then increments for next
    //    setCount(count=count +1)
    //    setCount(count=count +1) //not working as its working on stale data
    //but this works->
    setCount((count)=>count+1);
    setCount((count)=>count+1);
    setCount((count)=>count+1);
       console.log(count);
    }

    function handleDecrement(){
        // count--;
        // setCount(count-1);
        // setCount(count-1);
        // setCount(count-1);
        setCount((count)=>count-1);
        setCount((count)=>count-1);
        setCount((count)=>count-1);
        console.log(count)
    }

    return(
        <>
        <h2 className ="container m-5 p-5">
            <button className="btn btn-warning" onClick={handleIncrement}>➕ BY 3</button>
            <span className="mx-5 badge bg-success">{count}</span>
            <button className="btn btn-warning" onClick={handleDecrement}>➖ By 3</button>
        </h2>
        </>
    );
}

export default Counter;