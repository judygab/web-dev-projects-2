import React from "react";

const ImagesCollection = () => {
  const imagesList = [...new Array(8)].map(
    (number, index) => `/images/image-${index + 1}.jpg`
  );

  return (
    <>
      <ul className="images-collection-container">
        {imagesList.map((imgUrl, index) => {
          return (
            <li className={index % 2 === 0 ? "item short" : "item tall"}>
              <figure>
                <img src={imgUrl} alt="collection" />
              </figure>
            </li>
          );
        })}
      </ul>
      <div className="d-flex mt-2 mb-4">
        <a href="/" className="mx-auto fs-3">
          View more
        </a>
      </div>
    </>
  );
};

export default ImagesCollection;
