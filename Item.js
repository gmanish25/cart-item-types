import React from 'react'
import './App.js'
import logo1 from './1mg.jpg'

const newLocal = <div />
const Item = () => {
    return (
        
      
         
        <div className=" w-1/2 float-left mr-12 xl:overflow-hidden" style={{width: '665px'}}>
          
        <div className="text-2xl   font-semibold">Item Requiring Prescription (2)</div>
        <div className="  mt-2 w-full border rounded-md flex bg-white  shadow-md">
            <div   className="float-left " >
              <img src={logo1} alt={'1mg'} style={{borderRadius: '5px' }}  className="p-3"/>
            </div>
            <button className=" h-5 mt-10 ml-4  w-5"><i className="fa fa-heart-o"></i></button>
              <div className="float-left block ml-6  pt-5">
              <div className="font-semibold">Aztor 40mg</div>
            <div className=" text-teal-300">Mfr. Lupin Ltd</div>
              <select className="text-sm" name="Strip of 10 tablets" id="qty" className=" cursor-pointer  bg-transparent -ml-1 " style={{color: 'gray'}}>
                 <option  >Strip of 10 tablets</option>
                 <option  >Strip of 20 tablets</option></select>
              </div>
              <div className="quantity float-left mt-10 ml-16">
              
              <input type='button' className="w-8 h-8 text-xl rounded-md"  name='subtract' onclick='' value='-'/>
		        	<input type='text' className="w-8  h-8 text-center" name='qty' id='qty' value='1' />
		        	<input type='button'className="w-8 h-8 text-xl rounded-md" name='add' onclick='' value='+'/>
              </div>      
            
            <button class="total-price float-right mt-8 ml-6  h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800 ">₹150
            <span class="  text-xs block  text-opacity-75 ">BUY</span>
          </button>
            <input type="button" value="X" class="delete" onclick="delete_row('1')" className="float-right bg-transparent h-5 mt-10  ml-4 cursor-pointer "></input>
           
        </div>

        
        <div className="  mt-2 w-full border rounded-md flex bg-white shadow-md">
            <div   className="float-left  " >
              <img src={logo1} alt={'1mg'} style={{borderRadius: '5px' }}  className="p-3 "/>
            </div>
            <button className=" h-5 mt-10 ml-4 w-5"><i className="fa fa-heart-o"></i></button>
              <div className="float-left block ml-6  pt-5">
              <div className="font-semibold">Aztor 40mg</div>
            <div className=" text-teal-300">Mfr. Lupin Ltd</div>
              <select className="text-sm" name="Strip of 10 tablets" id="qty" className=" cursor-pointer  bg-transparent -ml-1 " style={{color: 'gray'}}>
                 <option  >Strip of 10 tablets</option>
                 <option  >Strip of 20 tablets</option></select>
              </div>
              <div className="quantity float-left  pt-8 ml-20">
              <input type="text" name="name" value="10" maxlength="2" className="w-5 ml-3 "></input>
            <div style={{color: 'gray'}}>Tablets</div>
            </div>     
            <div  className="float-left pt-8 pl-2">
              <div><button>▲</button> </div> 
              <div><button>▼</button></div>
              
            </div>        
            
            <button class="total-price float-right mt-8 ml-8  h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹150
            <span class="  text-xs block  text-opacity-75 ">BUY</span>
          </button>
          
            <input type="button" value="X"  onclick="delete_row('1')" className="float-right bg-transparent h-5  ml-4 cursor-pointer"></input>
        </div>


        <div className="  mt-2 w-full border rounded-md flex bg-white shadow-md">
        <input type="button" value="X"  onclick="delete_row('1')" className="float-right bg-transparent h-5 mt-10  cursor-pointer ml-4"></input>
            <div   className="float-left  " >
              <img src={logo1} alt={'1mg'} style={{borderRadius: '5px' }}  className="p-3 "/>
            </div>
            <button className=" h-5 mt-10 ml-4 w-5"><i className="fa fa-heart-o"></i></button>
              <div className="float-left block ml-6  pt-5">
              <div className="font-semibold">Aztor 40mg</div>
            <div className=" text-teal-300">Mfr. Lupin Ltd</div>
              <select className="text-sm" name="Strip of 10 tablets" id="qty" className=" cursor-pointer  bg-transparent -ml-1 " style={{color: 'gray'}}>
                 <option  >Strip of 10 tablets</option>
                 <option  >Strip of 20 tablets</option></select>
              </div>
              
              <div className="quantity float-left mt-10 ml-16">
              <select className=" w-24 border rounded-l border-teal" name="1 Qty" >
                <option>1 Qtyt</option>
                <option>2 Qtyt</option>
                <option>3 Qtyt</option>
                <option>4 Qtyt</option>
                <option>5 Qtyt</option>
              </select>
              
              </div>      
              
            <button class="total-price float-right mt-8 ml-6  h-12 w-32 border-none cursor-pointer bg-teal-600 text-white rounded-md hover:bg-teal-800">₹150
            <span class="  text-xs block  text-opacity-75 ">BUY</span>
          </button>
          
            
        </div>
        </div>
     
    )
}

export default Item
