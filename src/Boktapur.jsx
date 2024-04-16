import React, {useState} from "react"
function Boktapur()
 {
   const [name, setName] = useState();
   const [payment, setPayment] = useState();
   const [shipping, setShipping] = useState();
   const UpdateName = (event)=>{
    setName(event.target.value);
   }
   const UpdatePayment = (event)=> {
    setPayment(event.target.value)
  };
  const updateshiping = (event)=>
   {
    setShipping(event.target.value);
   }
   return(
    <div>
        <input type="text" value={name} onChange={UpdateName}/>
        <p>Name: {name}</p>
        <select value={payment} onChange={UpdatePayment}>
            <option value="">Select payment Method</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment Via: {payment}</p>
        <label>
            <input type="radio" value="Pick Up" 
                               checked = {shipping === "Pick Up"}
                                onChange={updateshiping} />Pick Up
        </label>
        <label>
            <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={updateshiping}/>Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
   
   );
 }
export default Boktapur