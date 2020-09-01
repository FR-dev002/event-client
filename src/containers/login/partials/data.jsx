import React, { Fragment, useEffect } from "react";
import LoginProcess from "./loginProses";
import Button from "./button";

const Data = props => {
  const { values, updateData, toogleModal, data } = LoginProcess();
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>name</th>
            <th>action</th>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dt.name}</td>
                <td>
                  <Button
                    click={() => {
                      updateData(index);
                    }}
                  />
                </td>
                <td>{dt.isDeleted ? "l" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {toogleModal ? (
        <Button
          click={() => {
            updateData();
          }}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Data;
