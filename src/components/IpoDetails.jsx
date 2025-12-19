import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ipoList } from "../data/ipoData";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import "./ipo.css";

function IpoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);

  const ipo = ipoList.find((item) => item.id === id);

  if (!ipo) {
    return <p className="ipo-not-found">IPO not found</p>;
  }

  return (
    <div className="ipo-details-container">
      <div className="navigation-container">
        <p>Home</p>
        <span className="greater-than-icon">
          <FaGreaterThan />
        </span>
        <p>Market watch</p>
      </div>
      <div className="details-header">
        <div className="details-subcontainer">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/")}
          >
            <MdKeyboardArrowLeft />
          </button>
          <div className="company-name-container">
            <img className="logo details-logo" src={ipo.logo} alt={ipo.name} />
            <div>
              <h2 className="company-name highlight-info">{ipo.name}</h2>
              <p className="company-name-full">{ipo.company}</p>
            </div>
          </div>
        </div>
        <div className="download-section-container">
          <GrDocumentDownload className="download-icon" />
          <button type="button" className="applynow-button">
            Apply Now
          </button>
        </div>
      </div>

      <div className="ipo-details-main-container">
        <h3>IPO Details</h3>
        <div className="ipo-details-card">
          <div className="detail-row">
            <span>Issue Size</span>
            <strong>{ipo.issueSize}</strong>
          </div>
          <div className="detail-row">
            <span>Price Range</span>
            <strong>{ipo.priceRange}</strong>
          </div>
          <div className="detail-row">
            <span>Minimum amount</span>
            <strong>{ipo.minimumAmount}</strong>
          </div>
          <div className="detail-row hiden-on-mobile">
            <span>Lots</span>
            <strong>{ipo.lots}</strong>
          </div>
          <div className="detail-row min-quantity-row">
            <span>Min. Quantity</span>
            <strong>150 shares</strong>
          </div>
          <div className="detail-row">
            <span>Issue Date</span>
            <strong>{ipo.issueDate}</strong>
          </div>
          <div className="detail-row hiden-on-mobile">
            <span>Listed on</span>
            <strong>{ipo.listedOn}</strong>
          </div>
          <div className="detail-row hiden-on-mobile">
            <span>Listed Price</span>
            <strong>{ipo.listedPrice}</strong>
          </div>
          <div className="detail-row hiden-on-mobile">
            <span>Listing gains</span>
            <strong>{ipo.listingGains}</strong>
          </div>
        </div>
      </div>

      <div className="ipo-details-main-container">
        <h3>IPO Timeline</h3>
        <div className="ipo-timeline">
          <div className="timeline-item completed">
            <div className="circle">
              <FaCheck />
            </div>
            <div>
              <p className="title">Bidding starts</p>
              <p className="date">{ipo.biddingStarts}</p>
            </div>
          </div>

          <div className="timeline-item completed">
            <div className="circle">
              <FaCheck />
            </div>
            <div>
              <p className="title">Bidding ends</p>
              <p className="date">{ipo.biddingEnds}</p>
            </div>
          </div>

          <div className="timeline-item completed">
            <div className="circle">
              <FaCheck />
            </div>
            <div>
              <p className="title">Allotment finalisation</p>
              <p className="date">{ipo.allotmentFinalization}</p>
            </div>
          </div>

          <div className="timeline-item completed">
            <div className="circle">
              <FaCheck />
            </div>
            <div>
              <p className="title">Refund initiation</p>
              <p className="date">{ipo.refundInitiation}</p>
            </div>
          </div>

          <div className="timeline-item completed">
            <div className="circle">
              <FaCheck />
            </div>
            <div>
              <p className="title">Demat transfer</p>
              <p className="date">{ipo.dematTransfer}</p>
            </div>
          </div>

          <div className="timeline-item completed">
            <div className="circle">
              <FaCheck />
            </div>
            <div>
              <p className="title">Listing date</p>
              <p className="date">{ipo.listingDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ipo-details-main-container about-section">
        <h3>About the company</h3>
        <p className={`about-text ${showMore ? "expanded" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
          vulputate elit ut posuere. Curabitur sollicitudin nisl sed massa porta
          iaculis. Fusce efficitur aliquam justo, sed luctus nisl sagittis at.
          Nunc rutrum elit a lectus semper tempor. Nulla vitae sem nibh. Sed
          dictum sit amet ipsum sit amet viverra. Sed libero risus, imperdiet
          gravida urna a, volutpat tincidunt libero. Nulla purus purus,
          ullamcorper a nulla vitae, accumsan scelerisque lorem. Proin in semper
          velit, vel aliquet lacus. Integer tincidunt ligula non vestibulum
          maximus.
          <br /> Nulla quis euismod nisl, id imperdiet lorem. Vestibulum congue
          sem a elit ultricies, nec porttitor diam pulvinar. Fusce venenatis
          tortor vel posuere pharetra. Curabitur nibh urna, congue quis ornare
          nec, pellentesque et dolor. Quisque id molestie tellus. Integer at
          felis in tortor molestie tincidunt. Proin quis odio iaculis, finibus
          neque vel, mattis libero. Praesent porta orci sit amet lectus
          sagittis, ut tristique velit commodo. Integer volutpat hendrerit
          lectus sit amet imperdiet.Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Phasellus
          lobortis ultricies nibh, et sagittis metus. <br /> Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam porttitor eleifend
          dolor, sit amet semper felis malesuada eget. Nullam interdum fermentum
          sodales. Praesent malesuada, tortor id malesuada volutpat, dui nisl
          venenatis est, sit amet aliquam tortor mi non eros. Maecenas eros
          lacus, fermentum ac dolor tristique, luctus bibendum risus. Etiam sed
          interdum urna. Etiam et tellus pharetra, pulvinar nisi a, luctus
          lectus. Aenean ante lectus, semper eget consequat eget, vulputate vel
          lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Proin non convallis odio, vel mollis urna. Etiam vitae sollicitudin
          mauris, ut maximus nunc.
        </p>
        <button
          type="button"
          className="read-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default IpoDetails;
