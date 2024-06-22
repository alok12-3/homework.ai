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
