import React from "react";

export class Footer extends React.Component {
    render() {
      return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
          <div className="container-fluid footer">
            <div className="row">
              <div className="col-md-12">
                <ul className="pull-right list-unstyled">                  
                  <li>
                      © By Hakan Baştürk {new Date().getFullYear()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )
    }
  }