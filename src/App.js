
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './component/Header';
import LineBar from './component/LineBar'
import TableComp from './component/TableComp';

const App =()=> {
  const [dataSet , setDataSet] = useState([]);
  const [isLoading ,setIsLoading] = useState(false);
  const [revenueType , setRevenueType] = useState([]);
  const [filteredData , setFilteredData] = useState([]);
  const [currRevenue ,setCurrRevenue] = useState("All");
  const [productType , setProductType] = useState([]);

 
  const makeApiCall = async ()=>{
    try{
       setIsLoading(false);
       const response = await axios.get("http://fetest.pangeatech.net/data");
       setDataSet(response.data);
       setFilteredData(response.data);
       setIsLoading(true);

    }catch(error){
      throw new Error(error);
    }
  }

  //this will call only first time when page first time rendered
  useEffect(()=>{
      makeApiCall();
  },[])


  useEffect(()=>{

    if(isLoading){
      const temp = dataSet.map((item)=>{
        return item.revenue_type;
      });
      const set1 = [...new Set(temp)];
      setRevenueType(set1);

      const product = dataSet.map((item )=>{
        return item.product
      });

      const set2 =[...new Set(product)];
      setProductType(set2);

    }
  },[isLoading]);

  const filterHandler = (event)=>{
    if(event.target.name === "All"){
      setFilteredData(dataSet);
      setCurrRevenue("All");
    }else{
      const arr  = dataSet.map((item)=>{
        return item.revenue_type  === event.target.name 
      })
      setCurrRevenue(event.target.name);
      setFilteredData(arr);
    }

  }

  return (
   <React.Fragment>
    <Header filterHandler={filterHandler} data={dataSet} isLoading={isLoading} revenueType={revenueType} currRevenue={currRevenue}/>
   <div>
    <LineBar data={filteredData} productType={productType}/>
    <TableComp data={filteredData}/>
   </div>
   </React.Fragment>
  );
}

export default App;
