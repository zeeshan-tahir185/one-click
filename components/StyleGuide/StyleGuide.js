import React from "react";
import ColorPalette from "./StyleSections/ColorPalette";

const StyleGuide = ({user}) => {
  return (
    <>
      <div className="rbt-style-guide-area rbt-utilize-area rainbow-section-gap-big">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div
                id="colorPalette"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <ColorPalette user={user}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
