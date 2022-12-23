import React from 'react';
import './last.css';

const Last = () => {
  return (
    <div >
        <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
        <h4>Display to/Work Order</h4>
        <h3>Welcome Nishchal Anand</h3>
         <div className="placed">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
         </div>
         </div>
        

        <div className='second'>
            <label htmlFor="" className='pkk'>SCAN MU/PICK NUMBER</label>
            <input type="text" className='sec' />

        </div>

        <div className="third">
                <div>
                <label htmlFor="">MU NUMBER</label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor="">PICK ORDER</label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor="">Transform Order Number# </label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor=""> Transform Order Status  </label> <br />
                <input type="text" className='okk' />
                </div>
                <div>
                <label htmlFor="">Sales Order#  </label> <br />
                <input type="text" className='okk' />
                </div>

        </div>

        <div className="four">
                <div>
                <label htmlFor="">Enter Delivery </label> <br />
                <input type="text" className='opp' />

                </div>
                <div>
                <label htmlFor="">Ship To Country  </label> <br />
                <input type="text" className='opp' />
                </div>
                <div>
                <label htmlFor="">  Transformation Site  </label> <br />
                <input type="text" className='opp' />
                </div>



        </div>
        <div className='five'> 
            Total No Of Items(0)
        </div>

        <div className='six'>
            <table>
                    <thead>
                            <tr>
                                <th></th>
                                
                                
                            </tr>
                    </thead>
                    <tbody>
                            <div className='move'>No Data</div>
                    </tbody>

            </table>

        </div>









    </div>
  );
};

export default Last;