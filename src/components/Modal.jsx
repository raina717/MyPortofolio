import React from "react";
import parser from "html-react-parser";

export default function Modal({ modalData }) {
  const { thumbUrl, details } = modalData;
  const { title, description, type, languages, tools, country, url } = details;
  return (
    <div className="px-modal">
      <div className="single-project-box">
        <div className="row align-items-start">
          <div className="col-lg-7">
            <img className="border" src={thumbUrl} title alt="Thumbnail" />
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0">
            {title && <h4>{parser(title)}</h4>}
            {description && <p>{parser(description)}</p>}
            <div className="about-content">
              <ul>
                {type && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Type:</span>
                    <span>{type}</span>
                  </li>
                )}
                {languages && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Languages:</span>
                    <span>{languages}</span>
                  </li>
                )}
                {tools && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Tools:</span>
                    <span>{tools}</span>
                  </li>
                )}
                {country && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Country:</span>
                    <span>{country}</span>
                  </li>
                )}
                {url && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Link Project:</span>
                    <span
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {url}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
