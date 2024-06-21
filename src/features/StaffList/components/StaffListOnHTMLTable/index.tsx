"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import { Staff, Staffs } from "../../types/type";
import { useDummyStaff } from "../../hooks/useDummyStaff";

const StaffListOnHTMLTable = () => {
  const { fetchDummyStaff } = useDummyStaff();
  const [staffs, setStaffs] = useState<Staffs>(fetchDummyStaff());

  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const sortStaffsByIdAsc = () =>
    setStaffs(staffs.sort((a, b) => (a.id > b.id ? 1 : -1)));
  const sortStaffsByIdDesc = () =>
    setStaffs(staffs.sort((a, b) => (a.id < b.id ? 1 : -1)));

  const handleSortById = () => {
    if (order === "asc") {
      sortStaffsByIdDesc();
      setOrder("desc");
    } else {
      sortStaffsByIdAsc();
      setOrder("asc");
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <TableSortLabel
              active={true}
              onClick={handleSortById}
              direction={order}
            >
              ID
            </TableSortLabel>
          </th>
          <th>Name</th>
          <th>Entry Date</th>
        </tr>
      </thead>
      <tbody>
        {staffs.map((staff: Staff) => (
          <tr key={staff.id}>
            <td>{staff.id}</td>
            <td>{staff.name}</td>
            <td>{staff.entryDate.toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { StaffListOnHTMLTable };
