import { useState } from "react";



export default function(){
    const [data,setData] = useState();
    function handleChange(event){
        setData(event.target.value);
    }
    
    return(
        <>
        <div className="container m-5 p-5">
            {/* <input type="text" value={data} onChange={handleChange(e)}/>
            // wont work (e) means passing an event object */}
            <input type="text" value={data} onChange={(e)=>handleChange(e)}/>
            <div>
            {data}
            </div>
        </div>
        </>
    );
}