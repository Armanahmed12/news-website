import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light p-3 my-2'>
            <h2 className='fw-bold'>Q-Zone</h2>
               <img className='img-fluid' src={qZone1} alt="" />
               <img className='img-fluid' src={qZone2} alt="" />
               <img className='img-fluid' src={qZone3} alt="" />
        </div>
    );
};

export default QZone;