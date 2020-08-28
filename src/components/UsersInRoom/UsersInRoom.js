import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./UsersInRoom.css";

const UsersInRoom = ({ users, show }) => (
  <div className="UsersInRoom">
    {users ? (
      <div>
        <table class="ui celled inverted selectable table">
          <thead class="">
            <tr class="">
              <th class="">Room Members</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody class="">
            {users.map(({ name, value }) => (
              <tr class="" key={name}>
                <td class="nameicon">
                  {name}
                  {value > 0 ? (
                    <img
                      className="icon"
                      alt="Selected Icon"
                      src={onlineIcon}
                    />
                  ) : (
                    ""
                  )}
                </td>
                {value > 0 ? (
                  show ? (
                    <td className="right aligned">{value}</td>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : null}
  </div>
);

export default UsersInRoom;
