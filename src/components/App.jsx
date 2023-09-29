import '../index.css';
import 'atropos/css';
import Atropos from 'atropos/react';

function App() {
  return (
    <div className="background">
      <div id="app">
        <Atropos activeOffset={20} shadowScale={1}>
          <div className="box">
            <div className="box-label">
              <div className="box-logo" data-atropos-offset="15"></div>
            </div>
            <img
              className="name-logo"
              data-atropos-offset="20"
              alt="logo"
              src="https://www.pngall.com/wp-content/uploads/4/Cyberpunk-2077-Logo-PNG-Image.png"
              width={150}
            />
            <div className="box-info">
              <ul className="info-list">
                <li className="pegi-18" data-atropos-offset="15"></li>
                <li className="CD-Project" data-atropos-offset="15"></li>
              </ul>
            </div>
          </div>
        </Atropos>
      </div>
    </div>
  );
}

export default App;
