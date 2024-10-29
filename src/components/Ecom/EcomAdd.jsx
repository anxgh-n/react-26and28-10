import { useState } from "react";

export default function EcomAdd(){
const [gadgetdata,setgadgetData]=useState ({
    prodId: 0,
      prodName: "",
      prodCost: 0,
      prodImage:""
});

function handleFormSubmit(event){
    //1.prevent default nature of submit
    event.preventDefault();
    //2. for now console.log the form data which is in the state variable
    console.log(gadgetdata);
}
    return(
        <>
        <div className="container m-5">
            <div className="card">
                <form onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="card-header bg-success text-light">
                        <h3>Add a new GADGET</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <label htmlFor="gName" className="form-label">Gadget name:</label>
                            <input type="text" 
                            id="gName"
                            placeholder="Enter the name of a gadget"
                            className="form-control"
                            onChange={(e)=>setgadgetData({...gadgetdata, prodName:e.target.value})}/>
                            
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="gCost" className="form-label">Gadget cost:</label>
                            <input type="text" 
                            id="gCost"
                            placeholder="Enter the cost of the gadget"
                            className="form-control"
                            onChange={(e)=>setgadgetData({...gadgetdata, prodCost:e.target.value})}/>
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="gImage" className="form-label">Gadget Url:</label>
                            <input type="text" 
                            id="gImage"
                            placeholder="Enter the gadget image Url"
                            className="form-control"
                            onChange={(e)=>setgadgetData({...gadgetdata, prodImage:e.target.value})}/>
                        </div>
                        <div className="card-footer bg-success text-light">
                            <button 
                            type="submit" 
                            className="btn btn-light text-success"
                           >ADD</button>
                            <button 
                            type="reset" 
                            className="btn btn-light text-success mx-5"
                            
                            >CLEAR</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
        
        </>
    );
}