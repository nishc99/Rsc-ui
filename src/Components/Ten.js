import React from 'react';
import './Ten.css';

const Ten = () => {
  return (
    <div>
<div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
        <h4>VERIFICATION</h4>
        <h3>Welcome Nishchal Anand</h3>
         <div className="placed">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
         </div>
       </div>   
        

        <div className='tik1'>
           <div>
           <label htmlFor="" className='ab2'>Transform Order Number</label>
            <input type="text" className='top' placeholder='T103560' />
           </div>
           <div className='tokk'>
           <label htmlFor="" className='ab1'> #MU NUMBER</label>
           
            <input type="text" className='top' placeholder='HD678958852' />
           </div>
        </div>

        <div className='thirdrow'>

            <div>
            <label htmlFor="">Transformational Site</label> <br />
                    <input type="text" placeholder='Belgium,Japan' />
                
            </div>
            <div>
            <label htmlFor="">Ship To Country</label> <br />
                    <input type="text"  placeholder='India' />
                
            </div>
            <div>
            <label htmlFor="">OE Operator</label> <br />
                    <input type="text"  placeholder='DEC,21 2022 GMT' />
                
            </div>
            <div>
            <label htmlFor=""> Transform Order Status </label> <br />
                    <input type="text" placeholder='5689789/pakistan' />
                
            </div>
            <div>
            <label htmlFor="">Verify Line Clearance</label> <br />
                    <input type="radio"  />
                
            </div>
            <div>
            <label htmlFor="">*Material Number</label> <br />
                    <input type="text" placeholder='242436-45'  />
                
            </div>
            <div>
            <label htmlFor="">*Batch Number</label> <br />
                    <input type="text"  placeholder='BATCHHH' />
                
            </div>
        </div>

       <div>
       <div className='tok8'>
            Work Order Details
             

         </div>
      <div className='tiktik'>
      <button className='hii'><b>CLEAR</b></button>
            <button className='hlo'><b>SAVE</b></button> 
      </div>
       </div>
        

         <div className="tok11">
            <table>
                <thead>
                    <tr>
                        <th>Work Order Number</th>
                        <th>Material Number</th>
                        <th>Batch Number</th>
                        <th>GSTIN</th>
                        <th>Word Order Quantity</th>
                        <th>Work Order Status</th>
                        <th>WO Disposotion</th>
                        <th>Accepted Quantity </th>
                        <th>Rejection Quantity</th>
                        <th>Reject Reasons</th>
                        <th>Comments</th>
                        <th>Exception Hu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WO1789</td>
                        <td>456456-12</td>
                        <td>BATCHH</td>
                        <td>56987413695</td>
                        <td>1</td>
                        <td>QA IN PROGRESS</td>
                        <td>
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">PARTIAL ACCEPT</option>
                                <option value="">REJECT</option>
                                <option value="">ACCEPT</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> <input type="number" /></td>
                    </tr>
                </tbody>
            </table>



         </div>



    </div>
  )
}

export default Ten;