import React from "react";
import { H2, H3 } from "../../components/Headings/Headings";
import {
  ContainerWrapper,
  ContainerWrapperCard
} from "../../components/ContainerWrapper/ContainerWrapper";
import { TH, TD, TABLE, THEAD } from "../../components/Table/Table";
import { Label, Button } from "../../components/Form/Form";

import "./Audit.scss";

export default function OverviewContent(props: any): JSX.Element {
  return (
    <React.Fragment>
      <ContainerWrapper id="container-wrapper">
        <H2>Audit Log</H2>
        <div className="row margin-padding-remove">
          <div className="col-md-8 audit-table">
            <ContainerWrapperCard className=" table-responsive ">
              <div className="audit-table-header">
                <i className="fas fa-redo"></i>
                <p className="paragraph-remove-margin">Refresh</p>
                <img
                  src="assets/download.svg"
                  alt="download"
                  className="custom-svg-icons"
                />
                <img
                  src="assets/print.svg"
                  alt="print"
                  className="custom-svg-icons"
                />
              </div>
              <div className="table-padding">
                <TABLE className="table table-borderless">
                  <THEAD>
                    <tr>
                      <TH scope="col">Event Time</TH>
                      <TH scope="col">Event Type</TH>
                      <TH scope="col">Status</TH>
                      <TH scope="col">User</TH>
                      <TH scope="col"></TH>
                    </tr>
                  </THEAD>
                  <tbody>
                    <tr>
                      <TD>Oct 12, 13:09 Pm</TD>
                      <TD>Delete file</TD>
                      <TD>Success</TD>
                      <TD className="audit-table-user">
                        <img src="assets/user.svg" alt="user-img" />
                        <div className="audit-user-details">
                          <p>Segun Oni</p>
                          <small>Accounting</small>
                        </div>
                      </TD>
                      <TD className="audit-details">Details</TD>
                    </tr>
                  </tbody>
                </TABLE>
              </div>
            </ContainerWrapperCard>
          </div>
          <div className="col-md-4 audit-filter">
            <ContainerWrapperCard className="audit-filter-container">
              <H3>FILTER</H3>
              <form className="audit-filter-form">
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputDepartment"
                    className="col-sm-3 col-form-label"
                  >
                    Department
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="inputDepartment"
                      placeholder="Enter department"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputUser"
                    className="col-sm-3 col-form-label"
                  >
                    User
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="inputUser"
                      placeholder="Enter user"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputStatus"
                    className="col-sm-3 col-form-label"
                  >
                    Status
                  </Label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="inputStatus"
                      placeholder="Enter status"
                    />
                  </div>
                </div>
                <div className="form-group row audit-filter-group-input">
                  <Label
                    htmlFor="inputDate"
                    className="col-sm-3 col-form-label"
                  >
                    Date
                  </Label>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-5">
                        <input
                          type="text"
                          className="form-control"
                          id="inputDate"
                          placeholder="Enter date"
                        />
                      </div>
                      <div className="col-sm-2 paragraph-center">
                        <p>to</p>
                      </div>

                      <div className="col-sm-5">
                        <input
                          type="text"
                          className="form-control"
                          id="inputDate"
                          placeholder="Enter date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="audit-button">
                  <Button className="audit-button-clear">Clear</Button>
                  <Button className="audit-button-filter">Filter</Button>
                </div>
              </form>
            </ContainerWrapperCard>
          </div>
        </div>
      </ContainerWrapper>
    </React.Fragment>
  );
}
