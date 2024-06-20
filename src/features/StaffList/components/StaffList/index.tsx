import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { Staff, Staffs } from "../../types/type";
import { useDummyStaff } from "../../hooks/useDummyStaff";

const StaffList = () => {
  const { fetchDummyStaff } = useDummyStaff();
  const staffs: Staffs = fetchDummyStaff();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
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
