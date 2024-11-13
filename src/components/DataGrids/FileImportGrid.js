import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Button, styled, Typography } from "@mui/material";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { MantineReactTable, MRT_TablePagination } from "mantine-react-table";
import "mantine-react-table/styles.css";
import { Fragment, useEffect, useState } from "react";
import { useFileAPI } from "../../services/FileApiService";
import colors from "../../constants/colors";
import DeleteModal from "../Modals/DeleteModal";
import { useRoster } from "../../providers/RosterContextProvider";
import CloseIcon from "../../assets/icons/CloseIcon";
import ChevronUpIcon from "../../assets/icons/ChevronUpIcon";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";

const FileImportGrid = ({
  selectedRow,
  setSelectedRow,
  refreshFilesData,
  setRefreshFilesData,
}) => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { getFiles, deleteFile } = useFileAPI();
  const {
    updateRosterName,
    updateViewLayout,
    setShowImportedFiles,
    updateIsFileImported,
    showImportedFiles,
    searchValue,
    updateFileId,
  } = useRoster();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getFiles();
        console.log({ response });
        if (response.length === 0) {
          updateIsFileImported(false);
        }
        setShowImportedFiles(true);
        updateIsFileImported(true);
        setAllData(response);
        setData(response);
        console.log("testing1");
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        console.log("testing2");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [showImportedFiles, refreshFilesData]);

  useEffect(() => {
    const filteredData = allData.filter((item) =>
      item.fileName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  }, [searchValue, allData]);

  const columns = [
    {
      accessorKey: "fileName",
      header: "Roster Name",
      size: 400,
    },
    {
      accessorKey: "createdAt",
      header: "Import Date",
      enableSorting: true,
      Cell: ({ cell }) => {
        const date = new Date(cell.getValue());
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
    },
  ];

  const handleClose = () => {
    setIsDeleteDialogOpen(false);
  };
  const handleDeleteOnClick = (row) => {
    setSelectedRow(row.row.original);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = (row) => {
    deleteFile(selectedRow.id).then(() => {
      setRefreshFilesData(!refreshFilesData);
    });
    handleClose();
  };

  const handleRowClick = (row) => {
    console.log({ row });
    if (!isDeleteDialogOpen) {
      setSelectedRow(row.original);
      updateViewLayout("roster");
      setShowImportedFiles(false);
      updateRosterName(row.original.fileName);
      updateFileId(row.original.id);
    }
  };
  console.log({ isLoading });
  return (
    <Fragment>
      <MantineReactTable
        columns={columns}
        data={data}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableGlobalFilter={false}
        enableRowActions
        enableToolbarInternalActions={false}
        positionActionsColumn="last"
        positionPagination="top"
        enableBottomToolbar={false}
        enableColumnOrdering={false}
        enableColumnFilters={false}
        enableStickyFooter
        enableStickyHeader
        enableColumnActions={false}
        manualSorting={false}
        enableSorting={true}
        state={{ isLoading: isLoading }}
        defaultColumn={{
          enablePinning: true,
          enableSorting: false,
        }}
        localization={{
          noRecordsToDisplay: "You do not have any Rosters imported",
          pinToLeft: "Move to start",
          pinToRight: "Move to end",
          sortByColumnAsc: "Sort ascending",
          sortByColumnDesc: "Sort descending",
          clearSort: "Clear sort",
          hideColumn: "Hide column",
          rowsPerPage: "Show",
        }}
        initialState={{
          pagination: {
            pageSize: 20,
          },
        }}
        icons={{
          IconDotsVertical: IconCaretDownFilled,
          IconSortDescending: ChevronDownIcon,
          IconSortAscending: ChevronUpIcon,
          IconClearAll: CloseIcon,
        }}
        renderRowActions={(row) => (
          <Button
            variant="outlined"
            sx={{
              border: `1px solid ${colors.border.default}`,
              color: colors.text.normal,
              borderRadius: "8px",
              textTransform: "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteOnClick(row);
            }}
          >
            Delete Import
          </Button>
        )}
        renderEmptyRowsFallback={(table) => {
          return (
            data.length === 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "65vh",
                  width: "100%",
                  textAlign: "center",
                  background: colors.neutral.background1,
                }}
              >
                <div
                  style={{
                    color: colors.text.normal,
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  You do not have any Rosters imported
                </div>
              </div>
            )
          );
        }}
        mantineTableHeadRowProps={{
          style: {
            background: colors.neutral.background1,
            color: colors.text.normal,
            borderLeft: `10px solid ${colors.neutral.background1}`,
            "&:hover": {
              background: colors.neutral.background1,
            },
          },
        }}
        mantinePaperProps={{
          style: {
            background: colors.neutral.background1,
            border: "none",
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background1,
            },
          },
        }}
        mantineTableHeadCellProps={{
          style: {
            background: colors.neutral.background1,
            color: colors.text.normal,
          },
        }}
        mantineTableBodyCellProps={{
          style: {
            color: colors.text.normal,
            padding: "12px",
          },
        }}
        mantinePaginationProps={{
          rowsPerPageOptions: ["20", "50", "100"],
          withEdges: true,
          style: {
            background: colors.neutral.background1,
            border: `10px solid ${colors.neutral.background1}`,
            color: colors.text.normal,
            "&:hover": {
              background: colors.neutral.background1,
            },
          },
        }}
        mantineTableContainerProps={{
          style: {
            background: colors.neutral.background1,
            height: "75vh",
            scrollbarWidth: "thin",
            scrollbarColor: `${colors.neutral.background2} ${colors.neutral.background1}`,
          },
        }}
        mantineTableBodyRowProps={({ row }) => ({
          onClick: () => {
            handleRowClick(row);
          },
          style: {
            cursor: "pointer",
            background: colors.neutral.background2,
            border: `10px solid ${colors.neutral.background1}`,
            borderRadius: "20px",
          },
        })}
        renderTopToolbar={(row) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 14px 0px 0px",
            }}
          >
            <MRT_TablePagination table={row.table} />
          </div>
        )}
      />
      <DeleteModal
        isDeleteDialogOpen={isDeleteDialogOpen}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </Fragment>
  );
};

export default FileImportGrid;
