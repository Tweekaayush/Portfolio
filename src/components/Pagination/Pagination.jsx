import { useEffect, useState } from 'react'
import './Pagination.css'

const Pagination = ({pageNo, setPageNo, totalPages}) => {

  const [paginationArray, setPaginationArray] = useState([])

  const handlePrev = () =>{
    setPageNo(pageNo - 1)
  }

  const handleNext = () =>{
    setPageNo(pageNo + 1)
  }

  useEffect(()=>{
    const prevArray = Array.from({length: 2}, (_, i)=> pageNo-1-i).filter((val)=> val>0).reverse()  
    const nextArray = Array.from({length: 3}, (_, i)=> pageNo+i).filter((val)=> val<=totalPages)  
    setPaginationArray([...prevArray, ...nextArray])
  }, [pageNo, totalPages])

  return (
    <div className='pagination-container'>
        <button onClick={handlePrev} disabled={pageNo===1} className="pagination-btn">{"<"}</button>
        {
            paginationArray?.map((page)=>{
                return <button 
                            key={page}
                            className={`pagination-btn ${page===pageNo?'pagination-btn-active':''}`}
                            onClick={()=>setPageNo(page)}
                        >
                                {page}
                        </button>
            })
        }
        <button onClick={handleNext} disabled={pageNo === totalPages} className="pagination-btn">{">"}</button>
    </div>
  )
}

export default Pagination