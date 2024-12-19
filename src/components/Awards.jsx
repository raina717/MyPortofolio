import React from "react";
import SectionHeading from "./SectionHeading";

export default function Awards({ data }) {
  const { sectionHeading, allAwards } = data;

  return (
    <section className="project-section section gray-bg" id="awards">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-3">
          {allAwards?.map((award, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="award-box">
                <div className="award-image">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="award-content">
                  <h3>{award.title}</h3>
                  <p className="award-date">{award.date}</p>
                  {/* <p>{award.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
