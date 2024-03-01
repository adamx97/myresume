// From https://medium.com/@stheodorejohn/a-guide-to-display-pdf-documents-in-react-bcd9fb0f56b0
import React from 'react';
import { Document, Page } from 'react-pdf';
const PDFViewer = () => {
 //const pdfURL = 'path_to_pdf_file.pdf';
 const pdfURL =  '/SampleResume.pdf';
return (
 <div>
    pdf below
 <Document file={pdfURL}>
 <Page pageNumber={1} />
 </Document>
 </div>
 );
};
export default PDFViewer;