import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import { Fragment, useMemo, useState } from "react";
import { MantineReactTable } from "mantine-react-table";
import { Menu } from "@mantine/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import colors from "../../constants/colors";
import { styled, Typography } from "@mui/material";
import EditIcon from "../../assets/icons/EditIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";
import { IconCaretDownFilled, IconPlus } from "@tabler/icons-react";

const MenuHeader = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.text.heading,
  paddingTop: "10px",
  fontSize: "18px",
  fontWeight: 600,
});

const Item = styled("div")({
  display: "flex",
  gap: "8px",
  padding: "8px",
});
const data = [
  {
    name: {
      firstName: "Zachary",
      lastName: "Davis",
    },
    address: "261 Battle Ford",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Robert",
      lastName: "Smith",
    },
    address: "566 Brakus Inlet",
    city: "Westerville",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Yan",
    },
    address: "7777 Kuhic Knoll",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "John",
      lastName: "Upton",
    },
    address: "722 Emie Stream",
    city: "Huntington",
    state: "Washington",
  },
  {
    name: {
      firstName: "Nathan",
      lastName: "Harris",
    },
    address: "1 Kuhic Knoll",
    city: "Ohiowa",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
  {
    name: {
      firstName: "Nathan1",
      lastName: "Harris1",
    },
    address: "1 Kuhic Knoll1",
    city: "Ohiowa1",
    state: "Nebraska1",
  },
];

const FileImportGrid = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        // cellRenderer: ({ row }) => (
        //   <td style={{ backgroundColor: "lightgray" }}>
        //     {row.getValue("name.firstName")}
        //   </td>
        // ),
        // Header: (
        //   <div
        //     style={{
        //       color: colors.text.normal,
        //       background: colors.neutral.background2,
        //     }}
        //   >
        //     Age
        //   </div>
        // ),
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
    ],
    []
  );

  const handleClose = () => {
    setIsDeleteDialogOpen(false);
    setIsEditDialogOpen(false);
    console.log("Closing");
  };

  const handleEdit = (row) => {
    setIsEditDialogOpen(true);
    console.log("Edit row:", row);
  };

  const handleDelete = (row) => {
    setIsDeleteDialogOpen(true);
    console.log("Delete row:", row);
  };

  return (
    <Fragment>
      <MantineReactTable
        columns={columns}
        data={data}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableGlobalFilter={false}
        enableRowActions
        positionActionsColumn="last"
        positionPagination="top"
        enableBottomToolbar={false}
        enableColumnOrdering={false}
        enableColumnFilters={false}
        icons={{
          IconDotsVertical: IconCaretDownFilled, // Replace default column action icon
          IconColumns: IconPlus,
        }}
        renderRowActionMenuItems={() => (
          <div sx={{ padding: "16px" }}>
            <MenuHeader>Actions</MenuHeader>
            <Menu.Item onClick={() => handleEdit()}>
              <Item>
                <EditIcon />
                <Typography>Edit Player</Typography>
              </Item>
            </Menu.Item>
            <Menu.Item onClick={() => handleDelete()}>
              <Item>
                <DeleteIcon />
                <Typography>Delete Player</Typography>
              </Item>
            </Menu.Item>
          </div>
        )}
        //   mantineTableBodyRowProps={{
        //     style: {
        //       background: colors.neutral.background2,
        //       border: `1px solid ${colors.neutral.background1}`,
        //       color: colors.text.normal,
        //       "&:hover": {
        //         background: colors.neutral.background2,
        //       },
        //     },
        //   }}
        //   mantineBottomToolbarProps={{
        //     style: {
        //       background: colors.neutral.background2,
        //       border: `2px solid ${colors.neutral.background1}`,
        //       color: colors.text.normal,
        //       "&:hover": {
        //         background: colors.neutral.background2,
        //       },
        //     },
        //   }}
        //   mantineFilterSelectProps={{
        //     style: {
        //       background: colors.neutral.background2,
        //       border: `1px solid ${colors.neutral.background1}`,
        //       color: colors.text.normal,
        //       "&:hover": {
        //         background: colors.neutral.background2,
        //       },
        //     },
        //   }}
        enableStickyFooter
        enableStickyHeader
        mantineTableHeadCellProps={{
          style: {
            background: colors.neutral.background1,
            //border: `5px solid ${colors.neutral.background1}`,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantineTableHeadRowProps={{
          style: {
            background: colors.neutral.background2,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantinePaperProps={{
          style: {
            background: colors.neutral.background2,
            border: `5px solid ${colors.neutral.background1}`,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantineTableBodyCellProps={{
          style: {
            background: colors.neutral.background2,
            border: `5px solid ${colors.neutral.background1}`,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantinePaginationProps={{
          style: {
            background: colors.neutral.background2,
            border: `1px solid ${colors.neutral.background1}`,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantineColumnActionsButtonProps={{
          style: {
            background: colors.neutral.background2,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantineTableContainerProps={{
          style: {
            background: colors.neutral.background2,
            //border: `1px solid ${colors.neutral.background1}`,
            height: "70vh",
            overflowY: "scroll",
            color: colors.text.normal,
            scrollbarWidth: "thin",
            scrollbarColor: `${colors.neutral.background2} ${colors.neutral.background1}`,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
        mantineTopToolbarProps={{
          style: {
            background: colors.neutral.background1,
            border: `5px solid ${colors.neutral.background1}`,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background2,
            },
          },
        }}
      />
      <DeleteModal
        isDeleteDialogOpen={isDeleteDialogOpen}
        handleDelete={handleDelete}
        handleClose={handleClose}
      />
      <EditModal
        isEditDialogOpen={isEditDialogOpen}
        handleEdit={handleEdit}
        handleClose={handleClose}
      />
    </Fragment>
  );
};

export default FileImportGrid;
