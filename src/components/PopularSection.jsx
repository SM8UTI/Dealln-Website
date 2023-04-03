import React from "react";
import { PopularSectionData, PopularCardData } from "../data/mainData";
import { gsap } from "gsap";
import { useEffect } from "react";
import DatainfoCard from "./DatainfoCard";
import { Link } from "react-router-dom";

const PopularSection = () => {
  useEffect(() => {
    gsap.to(".PopularSection .container .main-section", {
      scrollTrigger: {
        trigger: ".PopularSection .sub-text",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
    });
    gsap.to(".PopularSection .container .card-wrapper", {
      scrollTrigger: {
        trigger: ".PopularSection .main-section",
        start: "top 100%",
        end: "bottom 100%",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <div className="PopularSection">
      <div className="max">
        <span className="sub-text">Popular</span>
      </div>
      <div className="container max">
        <div className="main-section">
          <h2>
            <span>{PopularSectionData[0].br} </span>
            {PopularSectionData[0].mainHeading}
          </h2>
          <p>{PopularSectionData[0].mainDesc}</p>
        </div>
        <div className="card-wrapper max">
          {PopularCardData.map((elem, index) => (
            <DatainfoCard
              key={index}
              title={elem.title}
              comapnyName={elem.comapnyName}
              comapnyLogo={elem.comapnyLogo}
              desc={elem.desc.slice(0,100)}
              link={elem.link}
            />
          ))}
        </div>
        <Link to={"/"} className="btn-s">
          <span>Search all Products</span>
          <div>
            <svg
              width="120"
              height="39"
              viewBox="0 0 120 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 17.5C0 16.6716 0.309013 16 0.6902 16H93.3098C93.691 16 94 16.6716 94 17.5C94 18.3284 93.691 19 93.3098 19H0.6902C0.309013 19 0 18.3284 0 17.5Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.9656 1.13655C66.1665 0.332859 66.9809 -0.155782 67.7846 0.0451411C69.683 0.519754 71.5773 0.998233 73.469 1.47607C83.7553 4.07433 93.9662 6.65353 104.365 8.48859C104.846 8.57354 105.501 8.66051 106.3 8.76679C107.049 8.86625 107.924 8.98261 108.904 9.13005C110.834 9.42027 113.039 9.81626 114.855 10.3953C115.761 10.6838 116.641 11.0396 117.362 11.4931C118.056 11.9297 118.806 12.5854 119.098 13.5546C119.418 14.6169 119.07 15.6257 118.443 16.4533C117.838 17.2507 116.889 18.0118 115.653 18.7695C110.727 21.7883 105.24 24.0267 99.7618 26.0566C98.227 26.6254 96.6976 27.1762 95.1801 27.7229C91.2355 29.1437 87.3707 30.5358 83.6972 32.1384C83.5201 32.2156 83.1212 32.3842 82.5642 32.6197C81.0334 33.2666 78.3081 34.4185 75.7049 35.5687C73.9464 36.3456 72.3097 37.0935 71.2295 37.6411C70.9796 37.7678 70.777 37.8751 70.6183 37.9629C70.3635 38.4279 69.8696 38.7432 69.302 38.7432C69.2028 38.7432 68.886 38.7423 68.5499 38.5855C68.3584 38.4963 68.0644 38.3112 67.8585 37.9534C67.6377 37.5699 67.6233 37.172 67.6864 36.8695C67.7843 36.4006 68.0737 36.1101 68.1411 36.0425L68.1451 36.0384C68.2585 35.9243 68.3764 35.8333 68.4645 35.7698C68.799 35.5283 69.3196 35.2459 69.8729 34.9653C71.0302 34.3786 72.7305 33.6031 74.4925 32.8246C77.129 31.6597 80.0545 30.4231 81.5513 29.7904C82.0361 29.5855 82.371 29.4439 82.4977 29.3886C86.2681 27.7438 90.2747 26.3006 94.2529 24.8677C95.7504 24.3283 97.2439 23.7903 98.7193 23.2436C104.161 21.2272 109.42 19.0706 114.085 16.2117C115.189 15.5352 115.775 15.0061 116.052 14.6411C116.143 14.5213 116.185 14.4411 116.205 14.3939C116.161 14.3363 116.045 14.2091 115.764 14.0323C115.347 13.7702 114.736 13.5059 113.944 13.2536C112.368 12.7511 110.361 12.3829 108.458 12.0967C107.623 11.9711 106.774 11.8573 106.01 11.7548C105.122 11.6358 104.348 11.532 103.844 11.4429C93.3277 9.58721 82.9955 6.97706 72.7112 4.37902C70.8251 3.90255 68.9407 3.42649 67.057 2.95557C66.2533 2.75465 65.7646 1.94024 65.9656 1.13655ZM116.219 14.3405C116.22 14.3402 116.22 14.3471 116.216 14.3621C116.216 14.3483 116.218 14.3408 116.219 14.3405ZM70.211 38.2092C70.211 38.2092 70.2122 38.2083 70.2147 38.2064C70.2124 38.2082 70.2111 38.2092 70.211 38.2092Z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularSection;
