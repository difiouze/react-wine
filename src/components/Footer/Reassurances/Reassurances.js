import React from "react";
import reassurances from "../.././../data/reassurances";
import './reassurances.css'

const Reassurances = () => {
  return (
    <div className="reassurances">
      <div className="reassurances__inner container">
        {reassurances.map((reassurance) => (
          <div className="reassurances__item" key={reassurance.id}>
            <div className="reassurances__image">
              <img src={reassurance.image} alt={reassurance.title} />
            </div>
            <div className="reassurances__blocktext">
              <span className="reassurances__title">{reassurance.title}</span>
              <span className="reassurances__subtitle">
                {reassurance.subtitle} 
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reassurances;
