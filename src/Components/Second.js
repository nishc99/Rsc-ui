import React from "react";
import Secondfile from "./second.module.css";
import { BiBarcodeReader } from "react-icons/bi";


const Second = () => {
  return (
    <>
      <div className={Secondfile.coantainersa}>
        <div>
          <a
            href="https://usecheck.com/"
            className={Secondfile.btnshinesa}
            target="_blank"
          >
            Display TO / Work Order
          </a>
        </div>

        <form>
          <div className={Secondfile.qrmain}>
            <div className={Secondfile.qrcode}>
              <BiBarcodeReader size={20} className={Secondfile.qrcode1} />
              <h1>SCAN HU/PICK NUMBER</h1>
            </div>
            <input type="text" placeholder="HD19122022_01" />
          </div>

          <div className={Secondfile.samaininputs}>
            <div>
              <label>HU Number</label>
              <br />
              <input type="hello" placeholder="HD19122022_01" />
            </div>
            <div>
              <label>Pick Order</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transform Order Number #</label>
              <br />
              <input placeholder="TO1360" type="hello" />
            </div>
            <div>
              <label>Transform Order Status</label>
              <br />
              <input placeholder="COMPLETED" type="hello" />
            </div>
            <div>
              <label>Sales Orders #</label>
              <br />
              <input placeholder="SO" type="hello" />
            </div>
          </div>

          <div className={Secondfile.samaininputs2}>
            <div>
              <label>Enter Delivery</label>
              <br />
              <input placeholder="US" type="hello" />
            </div>
            <div>
              <label>Ship To Country</label>
              <br />
              <input placeholder="Poland" type="hello" />
            </div>
            <div>
              <label>Transformation Site</label>
              <br />
              <input placeholder="Courcelles, Belgium" type="hello" />
            </div>
          </div>



          <div className={Secondfile.TotalNumbersn}>
  <h6 style={{color:"black", display:"flex", marginTop:"80px"}}> Total Number of Item (1)</h6>
</div>
     
          {/* <div className="sa-emty-box"> */}
            {/* <div className="sa-tobar">
              <input className="check_box1" type="checkbox" />
            </div> */}
            {/* <div className="sa-box-content">
              <p>No data</p>
            </div> */}

  




            <div classname={Secondfile.containersn}>
    <div classname={Secondfile.py4}>
    
      <table className={Secondfile.tablebordershadow}>
        <thead className={Secondfile.theadprimary}>

          <tr>
      
          <th><input className={Secondfile.satobar} type="checkbox"/> </th>
            <th scope="col">Product Code</th>
      <th scope="col">Product Description</th>
      <th scope="col">Variant</th>
      <th scope="col">GSTIN</th>
      <th scope="col">Quantity</th>
      <th scope="col">UOM</th>
      <th scope="col"> Batch</th>
      <th scope="col">DOM</th>
      <th scope="col">SLED</th>
      <th scope="col">Comments</th>
      <th scope="col">Master Data Error</th>
      <th scope="col">Work Order #</th>
          </tr>
        </thead>
          <tbody className={Secondfile.line123}>
    <tr>
      <td ><input type="checkbox"/></td>
      <td style={{color: "black"}}>242436-12</td>
      <td style={{color: "black"}}>COUPLER AC ZOOM</td>
      <td style={{color: "black"}}>12</td>
      <td style={{color: "black"}}>10886705028634</td>
      <td style={{color: "black"}}>1</td>
      <td style={{color: "black"}}>EA</td>
      <td style={{color: "black"}}>BATCHHH</td>
      <td></td>
      <td></td>
      <td style={{color: "black"}}>MDM Check Success</td>
      <td style={{color: "black"}}>N/A</td>
      <td className={Secondfile.blueWO1789}>WO1789</td>
    </tr> 

    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 

    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 
    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 
    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 
  
    
  </tbody>
  
      </table>
    </div>
  </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default Second;



















// import React from 'react';
// import './Second.css';
// import { BiBarcodeReader } from 'react-icons/bi';
// const Second = () => {
//   return (
//     <div >
   
//      <div className='Container-sn'> 
//      <div className='second-sn'> 
//       <h1 className='disp-sn'>Display to/Work Order</h1>
//         <label htmlFor="" className='pkk-sn'><BiBarcodeReader/> SCAN HU/PICK NUMBER</label>
//         <input type="text" className='sec-sn' />

//         </div>

//         <div className="third-sn">
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b>HU NUMBER</b></label> <br />
//                 <input type="text" className='okk-sn' />
//                 </div>
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b>PICK ORDER</b></label> <br />
//                 <input type="text" className='okk-sn' />
//                 </div>
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b>Transform Order Number#</b> </label> <br />
//                 <input type="text" className='okk-sn' />
//                 </div>
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b> Transform Order Status </b> </label> <br />
//                 <input type="text" className='okk-sn' />
//                 </div>
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b>Sales Order# </b> </label> <br />
//                 <input type="text" className='okk-sn' />
//                 </div>

//         </div>

//         <div className="four-sn">
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b>Enter Delivery</b> </label> <br />
//                 <input type="text" className='opp-sn' />

//                 </div>
//                 <div>
//                 <label className='nis-sn' htmlFor=""><b>Ship To Country </b> </label> <br />
//                 <input type="text" className='opp-sn' />
//                 </div>
//                 <div>
//                 <label className='nis-sn' htmlFor=""> <b> Transformation Site </b> </label> <br />
//                 <input type="text" className='opp-sn' />
//                 </div>



//         </div>
//         <div className='five-sn'> 
//             <b>Total No Of Items(1)</b>
//         </div>

       

//        {/* table */}

//        <div classname="container-snn">
//     <div classname="py-4">
    
//       <table className="table border shadow">
//         <thead className="thead-primary-sn">
//           <tr>

//           <th className='ytm-sn'><input type="checkbox"/> </th>
          
//             <th scope="col">Product Code</th>
//       <th className='ytm-sn' scope="col">Product Description</th>
//       <th className='ytm-sn' scope="col">Variant</th>
//       <th className='ytm-sn' scope="col">GSTIN</th>
//       <th className='ytm-sn' scope="col">Quantity</th>
//       <th className='ytm-sn' scope="col">UOM</th>
//       <th className='ytm-sn' scope="col"> Batch</th>
//       <th className='ytm-sn' scope="col">DOM</th>
//       <th className='ytm-sn' scope="col">SLED</th>
//       <th className='ytm-sn' scope="col">Comments</th>
//       <th className='ytm-sn' scope="col">Master Data Error</th>
//       <th className='ytm-sn' scope="col">Work Order #</th>
//           </tr>
//         </thead>
//           <tbody>
//     <tr>
//       <td className='ytr-sn'><input type="checkbox"/></td>
//       <td className='ytr-sn'>242436-12</td>
//       <td className='ytr-sn'>COUPLER AC ZOOM</td>
//       <td className='ytr-sn'>12</td>
//       <td className='ytr-sn'>10886705028634</td>
//       <td className='ytr-sn'>1</td>
//       <td className='ytr-sn'>EA</td>
//       <td className='ytr-sn'>BATCHHH</td>
//       <td className='ytr-sn'></td>
//       <td className='ytr-sn'></td>
//       <td className='ytr-sn'>MDM Check Success</td>
//       <td className='ytr-sn'>N/A</td>
//       <td className='blue-WO1789'>WO1789</td>
//     </tr> 
    
//   </tbody>
  
//       </table>
//     </div>
//   </div>

//     </div>
//     </div>
//   );
// };

// export default Second;