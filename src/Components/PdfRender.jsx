import React from 'react';

const MyPdfViewer = ({urlPdf}) => {
  return (
    <div style={{width:'300px', height:'800px'}}>
        <object data={urlPdf} type="application/pdf" width={'300%'} height={'100%'} >
             <p>Alternative text - include a link <a href={urlPdf}>to the PDF!</a></p>
         </object>
    </div>
  );
};

export default MyPdfViewer;