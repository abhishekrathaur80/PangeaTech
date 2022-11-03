import React ,{useState} from 'react';
import Pagination from './Pagination';
import Table from 'react-bootstrap/Table'

const  TableComp = (props)=>{
    const perPage = 10;
    const [pagination ,setPagination] = useState({
        start:0,
        end:perPage
    })

    const onPaginationChange=(start ,end)=>{
        setPagination({start:start ,end:end})
        
    };

    return (
   <React.Fragment>
   <Table striped bordered hover>
    <thead>
        <tr>

        <th>Sr No</th>
        <th>Line of Business</th>
        <th>Revenue Type</th>
        <th>Product</th>
        <th>Posting Period</th>
        <th>ACV</th>
        <th>TCV</th>
        <th>Revenue</th>
            </tr>
    </thead>
    <tbody>
        {
            props.data.slice(pagination.start ,pagination.end).map((items,index)=>(
                <tr key={index}> 
                 <td>{items.S_no}</td>
                 <td>{items.line_of_business}</td>
                 <td>{items.revenue_type}</td>
                   <td>{items.product}</td>
                       <td>{items.month}-{items.year}</td>
                 <td>{items.acv}</td>
                     <td>{items.tcv}</td>
                   <td>{items.revenue}</td>
                </tr>
            ))
        }
    </tbody>

   </Table>
 <Pagination 
 perPage={perPage}
 onPaginationChange={onPaginationChange}
 total={props.data.length}
 />

   </React.Fragment>

    );

}

export default TableComp;