import { useNavigate } from "react-router-dom";
import { ipoList } from "../data/ipoData";
import "./ipo.css";

function IpoList() {
  const navigate = useNavigate();

  return (
    <div className="ipo-list-container">
      <div className="ipo-table">
        <div className="ipo-table-header">
          <span>Company / Issue Date</span>
          <span>Issue Size</span>
          <span>Price Range</span>
          <span>Min invest/qty</span>
        </div>

        {ipoList.map((ipo) => (
          <div
            key={ipo.id}
            className="ipo-row"
            onClick={() => navigate(`/ipo/${ipo.id}`)}
          >
            <div className="company-info">
              <img className="logo" src={ipo.logo} alt={ipo.name} />
              <div>
                <h2 className="company-name highlight-info">{ipo.name}</h2>
                <p className="issue-date">{ipo.issueDate}</p>
              </div>
            </div>

            <p className="cell highlight-info">{ipo.issueSize}</p>
            <p className="cell highlight-info">{ipo.priceRange}</p>
            <div className="cell">
              <p className="min-invest highlight-info">{ipo.minInvestment}</p>
              <p className="lots">{ipo.lots}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default IpoList;
