import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import runocr from '../config/geminiocr';
import run from '../config/geminieval';
import formatResponse from '../utils/formatResponse';

const useOCR = () => {
  const { image, text, setLoading, setResponse, setText } = useContext(AppContext);

  const fetchOcr = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }
    setLoading(true);
    try {
      const res = await runocr(image);
      setText(res);
    } catch (error) {
      console.error("OCR error:", error);
      setResponse("Error performing OCR.");
    }
    fetchText(text);
    setLoading(false);
  }

  const fetchText = async () => {
    if (!text) {
      alert("Please enter text first.");
      return;
    }
    setLoading(true);
    try {
      const res = await run(text);
      setResponse(formatResponse(res));
    } catch (error) {
      console.error("OCR error:", error);
      setResponse("Error performing OCR.");
    }
    setLoading(false);
  }

  return { fetchOcr };
};

export default useOCR;
