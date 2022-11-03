import React,{useState,useEffect} from 'react';
import '../App.css'
const Pagination =(props)=>{
  const [pageNo ,setPageNo] =useState(1);

  useEffect(()=>{
   
    const value = pageNo*props.perPage;
    props.onPaginationChange(value-props.perPage,value);

  },[pageNo])

  const onButtonClick=(type)=>{
    if(type === 'prev'){
        if(pageNo === 1){
            setPageNo(1);
        }else{
            setPageNo(pageNo-1)
        }
    }else if(type === 'next'){
        if(Math.ceil(props.total/props.perPage) === pageNo){
            setPageNo(pageNo);
        }else{
            setPageNo(pageNo+1);
        }
    }

  };

    return (
    <div className='buttons'>
        <button className='btn' onClick={()=>onButtonClick('prev')}>Prev</button>
        <button className='btn' onClick={()=>onButtonClick('next')}>Next</button>
    </div>
    )
}

export default Pagination;