import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TextResponse = () => {
  const { responses, loading } = useContext(AppContext);

  return (
    <div className="text-response w-full p-4 mx-auto  bg-white rounded shadow-md">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        responses.map((response, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Image {index + 1}
            </h3>
            <p
              className=" text-gray-600"
              dangerouslySetInnerHTML={{ __html: response }}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default TextResponse;
