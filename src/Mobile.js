import React from 'react'

function Mobile({mobilesList}) {
    // console.log("mobilesList: ",mobilesList);

    if (!mobilesList) {
        return <h6>Loading....</h6>;
    }
  return (
    <div>
        <div className='row'>
            {
                mobilesList.map((mobile, index)=>(
                    <div className='col-md-4' key={index}>
                        <div className='card m-2'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-center'>
                            <img style={{width:'155px', height:'155px'}} src={mobile.photo_path} />
                            </div>
                            <div className='p-1' style={{backgroundColor:'#7fffd4'}}>
                                <h5>{mobile.mobile_name}</h5>
                                
                            </div>
                            <div className='px-2'>
                            {
                                mobile.filters.map((filter, i)=>(
                                        <span key={i} className='badge bg-primary mx-1'>{filter.attribute}</span> 
                                ))
                            }
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Mobile