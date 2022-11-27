import React from "react";


function Dashboard(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.dashboard.map((dashboard) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={dashboard.live} target="_blank" rel="noreferrer">
                    <img
                      src={process.env.PUBLIC_URL + dashboard.image}
                      alt="Placeholder"
                    />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={dashboard.id}>
                      {dashboard.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {dashboard.description}
                  <br />
                  <br />
                  <div className="content is-family-code">
                    Languages: {dashboard.languages}
                    <br />
                    NPM Packages: {dashboard.packages}
                  </div>
                  <div className="card">
                    <footer className="card-footer">
                      <a
                        href={dashboard.repo}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        See the Repo!
                      </a>
                      <br />
                      <a
                        href={dashboard.deploy}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        See the Live Site!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;