/* eslint-disable react/prop-types */
import { usePDF } from 'react-to-pdf';



const Read = ({book}) => {

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <div className="lg:px-24 py-12">
         <button onClick={() => toPDF()} className='btn1 mb-4'>Download PDF</button>
         <div ref={targetRef}>
            <div>
                <h1 className='text-center font-bold'>
                    Preview
                </h1>
            </div>
        {book["Short description"]}
        </div>
    </div>
  );
};

export default Read;
