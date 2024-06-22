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
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import runocr from '../config/geminiocr';
import formatResponse from '../utils/formatResponse';

const useOCR = () => {
  const { images, setLoading, setResponses } = useContext(AppContext);

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
