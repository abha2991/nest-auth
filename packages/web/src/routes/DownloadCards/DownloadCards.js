import React, {useRef,useEffect, useState,createRef} from 'react';
import Header from "../Header";
//import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
//import { faPen } from '@fortawesome/free-solid-svg-icons';
//image
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import useProfileApi from '../../api/useProfileApi'
import Pdf from "react-to-pdf";
import { jsPDF } from "jspdf";
import useQueryParams from '../../hooks/useQueryParams'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { Navigate, useLocation } from 'react-router-dom'
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share";


const DownloadCards = () => {
  const componentRef = createRef();
  const id = useQueryParams();

  const {id: id2} = id



  const [cardname, setCardName] = useState();
  const [cardData, setCardData] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const getCardsOfUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/card1/getCard/${id2}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

      });

      const data1 = await response.json();

      setCardName(data1.CardNames)
setCardData(data1)

      setPaymentStatus(data1.PaymentStatus)
console.log(cardData.NoOfPages)
    } catch (e) {
      console.log({e})
    }

  };
  useEffect(() => {
    getCardsOfUser().then(r => console.log({r}));
    // return () => {
    //   setCardName({});
    //   setPaymentStatus({})// This worked for me
    // };
  }, [id2]);



console.log(cardname)


  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  };

  //const [zoom,setZoom]=useState({height:0, width:0});


  const doc = new jsPDF("p", "mm", "a4");

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();


  // const handleZoomIn=()=>{
  //
  //
  //   // Increase dimension(Zooming)
  //   setZoom({
  //     height : height + 10,
  //     width : width + 10,
  //   })
  // }

  // Event handler callback zoom out
  // const handleZoomOut=()=>{
  //
  //   // Assigning original height and width
  //   setZoom({
  //     height : height,
  //     width : width,
  //   })
  // }

  async function addImageProcess(src) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }


  const imageUrls = cardname;

  //console.log(imageUrls)

  async function generatePdf(imageUrls) {
    let len = imageUrls.length;
//console.log(len)
    for (const i of imageUrls) {
//console.log({i,imageUrls})
      let url = `http://localhost:3001/generated/${i}`
      // console.log({url})
      const image = await addImageProcess(url);
      //console.log({image})
      doc.addImage(image, "png", 0, 0, width, height);
      if (i !== imageUrls.length - 1) {
        doc.addPage();
      }

      //console.log({doc})
      doc.deletePage(len + 1);
    }
    return doc;
  }


  async function savePdf() {
    const multiPng = await generatePdf(imageUrls);
//console.log(multiPng)
    // generate dataURLString
    const dataURLString = multiPng.output("dataurlstring", "multiPng.pdf");
    //console.log(dataURLString);

    // save PDF (blocked in iFrame in chrome)
    multiPng.output("save", "multiPng.pdf");
  }

  // const generatePdfFromImages = (images) => {
  //   // Default export is A4 paper, portrait, using millimeters for units.
  //
  //
  //   // We let the images add all pages,
  //   // therefore the first default page can be removed.
  //   doc.deletePage(1);
  //
  // cardname?.forEach((image) => {
  //
  //     doc.addPage();
  //     doc.addImage(
  //         image
  //     );
  //   });
  //
  //   // Creates a PDF and opens it in a new browser tab.
  //   const pdfURL = doc.output("bloburl");
  //   window.open(pdfURL, "_blank");
  // };


  let redirectTo = `/preview?id=${id2}`
  // if(paymentStatus==='Success') {


  if (!cardname || !paymentStatus) {
    return (
        <>
       </>
    )
  } else if(paymentStatus==='Success'){
    return (
        <>
            <Header/>
<div className="pt-5">

   <h3 className="text-center">Download Card</h3>
 </div>
  <hr/>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center my-5">
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                        <FontAwesomeIcon icon={faArrowLeft}/>&nbsp;Back
                    </button>


                    <a href="#" style={{textDecoration: "none"}}>

                        <FontAwesomeIcon icon={faShareNodes}/>&nbsp;Share
                    </a>
                </div>
              {cardData.NoOfPages === 1 ?

                  cardname?.map((val, ind) => {
                    return (

                        <>


 <div className='item'

 >

            <img src={"http://localhost:3001/generated/" + val} className="img-fluid" alt="Invitations" style={{
              maxWidth: "300px",
              margin: "auto"
            }}/>


       </div>

                            </>
                    )

                  })

                  :


                  <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options}>

              {/*         <Pdf targetRef={componentRef} filename="code-example.pdf" options={options} scale={0.8}>*/} {/*  {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}*/} {/*</Pdf>*/} {/*<div>*/}


                    {cardname?.map((val, index) => {


                          return (

                              <>


 <div className='item'

 >

            <img src={"http://localhost:3001/generated/" + val} className="img-fluid" alt="Invitations" style={{
              maxWidth: "300px",
              margin: "auto"
            }}/>


       </div>

                            </>
                          )
                        }
                    )}


                    {/*</div>*/}

               </OwlCarousel>

              }


              <div className="d-md-flex justify-content-center pay-btn my-5">

                    <a onClick={savePdf} className="btn" style={{
                      borderRadius: "50px", background: "#FF3767",
                      color: "#fff", padding: "10px 20px"
                    }}>Download</a>
                </div>
            </div>
        </>
    )
}

else if(paymentStatus==='PENDING')
 {
   return(
       <>
         <Navigate to={redirectTo}/>
       </>
   )
}
 // }
}

export default DownloadCards
