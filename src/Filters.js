import React from 'react'

function Filters({filtersList, handleFilterIDs}) {


    if (!filtersList) {
        return <h6>Loading filters....</h6>;
    }
  return (
    <div>
        {
            filtersList.map((filter, i1)=>(
                <div key={i1}>
                    <div className=''><b>{filter.filter_type}</b></div>
                    <div className='p-2'>
                        {
                            filter.attributes.map((attribute, i2)=>(
                                <div key={i2}>
                                    <input type={'checkbox'} value={attribute.id} onChange={(e)=>handleFilterIDs(e.target.value)} /> {attribute.attribute} <br/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Filters