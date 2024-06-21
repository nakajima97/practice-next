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

const StaffList = () => {
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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={true}
              onClick={handleSortById}
              direction={order}
            >
              ID
            </TableSortLabel>
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Entry Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {staffs.map((staff: Staff) => (
          <TableRow key={staff.id}>
            <TableCell>{staff.id}</TableCell>
            <TableCell>{staff.name}</TableCell>
            <TableCell>{staff.entryDate.toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { StaffList };
