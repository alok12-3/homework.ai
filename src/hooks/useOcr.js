// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import runocr from '../config/geminiocr';
// import run from '../config/geminieval';
// import formatResponse from '../utils/formatResponse';

// const useOCR = () => {
//   const { image, text, setLoading, setResponse, setText } = useContext(AppContext);

//   const fetchOcr = async () => {
//     if (!image) {
//       alert("Please upload an image first.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await runocr(image);
//       setText(res);
//       fetchText(res); // Call fetchText with the OCR result
//     } catch (error) {
//       console.error("OCR error:", error);
//       setResponse("Error performing OCR.");
//       setLoading(false); // Ensure loading is stopped in case of error
//     }
//   };

//   const fetchText = async (ocrText) => {
//     if (!ocrText) {
//       alert("Please enter text first.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await run(ocrText);
//       setResponse(formatResponse(res));
//     } catch (error) {
//       console.error("Text processing error:", error);
//       setResponse("Error processing text.");
//     }
//     setLoading(false);
//   };

//   return { fetchOcr };
// };

// export default useOCR;
<<<<<<< HEAD


// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import runocr from '../config/geminiocr';
// import formatResponse from '../utils/formatResponse';

// const useOCR = () => {
//   const { image, setLoading, setResponse } = useContext(AppContext);

//   const fetchOcr = async () => {
//     if (!image) {
//       alert("Please upload an image first.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await runocr(image);
//       setResponse(formatResponse(res));
//     } catch (error) {
//       console.error("OCR error:", error);
//       setResponse("Error performing OCR.");
//     } finally {
//       setLoading(false); // Ensure loading is stopped in both success and error cases
//     }
//   };

//   return { fetchOcr };
// };

// export default useOCR;



=======
>>>>>>> 2a43ef633d95cdd0c4fca278b6499120743ea142
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import runocr from '../config/geminiocr';
import formatResponse from '../utils/formatResponse';

const useOCR = () => {
<<<<<<< HEAD
  const { images, setLoading, setResponses } = useContext(AppContext);

=======
  const { image, setLoading, setResponse } = useContext(AppContext);
>>>>>>> 2a43ef633d95cdd0c4fca278b6499120743ea142
  const fetchOcr = async () => {
    if (images.length === 0) {
      alert("Please upload images first.");
      return;
    }
    setLoading(true);
    const responses = [];
    try {
      for (const image of images) {
        const res = await runocr(image);
        responses.push(formatResponse(res));
      }
      setResponses(responses);
    } catch (error) {
      console.error("OCR error:", error);
      setResponses(["Error performing OCR."]);
    } finally {
      setLoading(false); // Ensure loading is stopped in both success and error cases
    }
  };

  return { fetchOcr };
};
export default useOCR;
