import Link from "next/link";
import tools from '../links'
import SEO from "../components/SEO";
function App() {
  // landing page for the app
  return (
    <>
      <SEO
        title="Txt Utils"
        description="The ultimate tool for your text needs. All for free and without any glitches. It is not run by a single person. It is tun by a community of people like you."
        keywords={[
          "textutils",
          "txtutils",
          "case changer",
          "text splitter",
          " text length calculator",
          " text to speech",
          " text to speech translator",
          " text to speech converter",
        ]}
      />
      <div className="container">
        <div className="text-center">
          <h1>Txt Utils</h1>
          <p>
            The <b>ultimate tool</b> for your text needs. All for <b>free</b>{" "}
            and <b>without any glitches</b>. It is not run by a single person.
            It is tun by a <b>community of people</b> like you.
          </p>
          <h2>Tools we provide :-</h2>
          {/* create a group of bootstrap cards for each tool */}

          <div className="row d-flex justify-content-center">
            {tools['pages'].map((tool) => {
              return (
                <div className="col-sm-4 mb-3" key={tool.text}>
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{tool.text}</h5>
                      <p className="card-text flex-grow-1">
                        {tool.description}
                      </p>

                      <Link href={tool.link}>
                        <button className="btn btn-primary mt-auto">
                          Try it
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;