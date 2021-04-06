import React, { useEffect } from "react";

function Nav(props) {
  const {
      sections = [],
      setCurrentSection,
      currentSection,
  } = props;

  useEffect(() => {
    document.title = currentSection;
}, [currentSection]); 

  return (
    <header className=" px-1 p-4 special-font">
      <div className="header-text d-flex flex-row justify-content-between mx-auto">
      <h2 className="title" onClick={() => {setCurrentSection('My Workouts')}}>
          My Weight Work
      </h2>
      <nav>
        <ul className="d-flex flex-row flex-wrap justify-content-around">
          {sections.map((section) => (
            <li className={`mx-3 ${
                currentSection === section && 'navActive'
                }`} 
                key={section}>
              <span
                onClick={() => {
                  setCurrentSection(section);
                }}
              >
                {section}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Nav;