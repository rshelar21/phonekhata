import React , {useState} from "react";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar";
import Card from "../components/Transcation/Card";
import {payItems} from "../utils/constants"

const Home = () => {
    const [payData, setPayData] = useState(payItems)
    const [filterData, setFilter] = useState(payItems)
    
    const handleFilter = (e, val) => {
        console.log(val)
        let data
         data =  payData.filter((item) => {
            if(val == "status") {
                return item?.isPay == true
            }
            if(val == "type") {
                return item?.type.includes('Automatic Payment')
            }
            if(val == "date") {
                return item?.time.includes('jun 22')
            }
           return true
        })
        setFilter(data)
    }

  return (
    <>
      <div className="">
        <Navbar />

        <div className="mx-auto max-w-3xl">
          <Filter handleFilter={handleFilter}/>

          <div className="pt-3">
            <h3 className="font-bold">Completed</h3>
          </div>

          
          <div className="pt-3">
            <h3 className="font-semibold text-gray-600 ">This week</h3>


            <div className="w-full flex flex-col gap-2">
            {
                filterData.filter((item) => {
                   return item != "" ? item : item
                })?.map((item, index) => (
                    <Card key={index} item={item} />
                ))
            }
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Home;
