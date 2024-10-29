export default function ButtonClick(){
let count =0;
    function handleClick(){
        console.log("Clicked");
        count++;
    }
    
    return(
        <>
        {/* Just calling the function name -"handleClick" and not the function "handleClick()" */}
        <button className="btn btn-success" onClick={handleClick}>Click Me!!!</button>
        <div>
        {count}
        </div>
        
        </>
    );
}