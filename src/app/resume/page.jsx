import { pdfjs, Document, Page } from "react-pdf"
import resume from "../../../public/Ryan_Beitler-Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


const Resume = () => {
    return (

            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1}/>
            </Document>

    )
}

export default Resume