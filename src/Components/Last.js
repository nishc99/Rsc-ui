import React from 'react';
import lastfile from './last.module.css';
import { BiBarcodeReader } from 'react-icons/bi';
const Last = () => {
  return (
    < >
      <div className={lastfile.coantainersa}>
        <div>
         
        <h1 className={lastfile.dispsa}>Display to/Work Order</h1>
        </div>

        <div>
        <div className={lastfile.secondsa}>
            <label htmlFor="" className={lastfile.greensa}><BiBarcodeReader/> SCAN HU/PICK NUMBER</label>
            <input type="text" className={lastfile.secsa} />

        </div>
        <div>
        <div className={lastfile.thirdsa}>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b>HU NUMBER</b></label> <br />
                <input type="text" className={lastfile.okksa} />
                </div>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b>PICK ORDER</b></label> <br />
                <input type="text" className={lastfile.okksa} />
                </div>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b>Transform Order Number#</b> </label> <br />
                <input type="text" className={lastfile.okksa} />
                </div>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b> Transform Order Status </b> </label> <br />
                <input type="text" className={lastfile.okksa} />
                </div>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b>Sales Order# </b> </label> <br />
                <input type="text" className={lastfile.okksa} />
                </div>

        </div>

<div>
<div className={lastfile.foursa}>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b>Enter Delivery</b> </label> <br />
                <input type="text" className={lastfile.oppsa} />

                </div>
                <div>
                <label className={lastfile.pkksa} htmlFor=""><b>Ship To Country </b> </label> <br />
                <input type="text" className={lastfile.oppsa} />
                </div>
                <div>
                <label className={lastfile.pkksa} htmlFor=""> <b> Transformation Site </b> </label> <br />
                <input type="text" className={lastfile.oppsa} />
                </div>



        </div>
        </div>


        <div><div className={lastfile.fivesa}> 
            <b>Total No Of Items(0)</b>
        </div>

        <div className={lastfile.sixsa}>
            <table>
            
                    <thead>
                            <tr>
                                <th className={lastfile.thsa}><input type="checkbox" style={{marginLeft : "-1350px"}}/> </th>
                                
                                
                            </tr>
                    </thead>
                    <tbody>
                            <div className={lastfile.movesa}><b>No Data</b></div>
                    </tbody>

            </table>

        </div>   
        </div>






        </div>
            
        </div>
      </div>




        

    </>
  );
};

export default Last;



















// import React from 'react';
// import './last.css';

// const Last = () => {
//   return (
//     <div >
//         {/* <div className="nav">
//         <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
//         <h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
//         <h4>Display to/Work Order</h4>
//         <h3>Welcome Nishchal Anand</h3>
//          <div className="placed">
//          <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
//         <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
//          </div>
//          </div> */}
        
        
//         <div className='second'>
//             <label htmlFor="" className='pkk'>SCAN MU/PICK NUMBER</label>
//             <input type="text" className='sec' />

//         </div>

//         <div className="third">
//                 <div>
//                 <label htmlFor="">MU NUMBER</label> <br />
//                 <input type="text" className='okk' />
//                 </div>
//                 <div>
//                 <label htmlFor="">PICK ORDER</label> <br />
//                 <input type="text" className='okk' />
//                 </div>
//                 <div>
//                 <label htmlFor="">Transform Order Number# </label> <br />
//                 <input type="text" className='okk' />
//                 </div>
//                 <div>
//                 <label htmlFor=""> Transform Order Status  </label> <br />
//                 <input type="text" className='okk' />
//                 </div>
//                 <div>
//                 <label htmlFor="">Sales Order#  </label> <br />
//                 <input type="text" className='okk' />
//                 </div>

//         </div>

//         <div className="four">
//                 <div>
//                 <label htmlFor="">Enter Delivery </label> <br />
//                 <input type="text" className='opp' />

//                 </div>
//                 <div>
//                 <label htmlFor="">Ship To Country  </label> <br />
//                 <input type="text" className='opp' />
//                 </div>
//                 <div>
//                 <label htmlFor="">  Transformation Site  </label> <br />
//                 <input type="text" className='opp' />
//                 </div>



//         </div>
//         <div className='five'> 
//             Total No Of Items(0)
//         </div>

//         <div className='six'>
//             <table>
//                     <thead>
//                             <tr>
//                                 <th></th>
                                
                                
//                             </tr>
//                     </thead>
//                     <tbody>
//                             <div className='move'>No Data</div>
//                     </tbody>

//             </table>

//         </div>









//     </div>
//   );
// };

// export default Last;