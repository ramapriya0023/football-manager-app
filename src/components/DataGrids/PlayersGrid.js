import styled from "@emotion/styled";
import { Menu } from "@mantine/core";
import { Typography } from "@mui/material";
import { IconCaretDownFilled, IconPlus } from "@tabler/icons-react";
import {
  MantineReactTable,
  MRT_ShowHideColumnsButton,
  MRT_TablePagination,
} from "mantine-react-table";
import { Fragment, useEffect, useState } from "react";
import { getPlayers, deletePlayer } from "../../services/PlayerApiService";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import colors from "../../constants/colors";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import { useRoster } from "../../providers/RosterProvider";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import ChevronUpIcon from "../../assets/icons/ChevronUpIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useNationality } from "../../providers/NationalityProvider";
import RosterEmptyState from "../common/RosterEmptyState";

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

const PlayersGrid = ({ selectedFile }) => {
  const { searchValue } = useRoster();
  const { updateNationalities } = useNationality();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [allPlayersData, setAllPlayersData] = useState([]);
  const [filteredPlayersData, setFilteredPlayersData] = useState([]);
  const [reloadGrid, setReloadGrid] = useState(false);

  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        setLoading(true);
        const response = await getPlayers(selectedFile.id);

        const rosterData = response[0]?.players;
        setAllPlayersData(rosterData || []);
        const uniqueNationalities = Array.from(
          new Map(
            rosterData.map((player) => [
              player.nationality,
              { nationality: player.nationality, flagImg: player.flagImg },
            ])
          ).values()
        );

        updateNationalities(uniqueNationalities);

        setFilteredPlayersData(rosterData || []);
      } catch (err) {
        setError("Failed to fetch players data");
      } finally {
        setLoading(false);
      }
    };

    if (selectedFile && selectedFile.id) {
      fetchPlayersData();
    }
  }, [selectedFile, reloadGrid]);

  useEffect(() => {
    const filteredData = allPlayersData.filter((player) =>
      player.playerName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPlayersData(filteredData);
  }, [searchValue, allPlayersData]);

  const formatHeight = (height) =>
    height ? `${(height / 100).toFixed(2)} m` : "";
  const formatWeight = (weight) => (weight ? `${weight} kg` : "");

  const columns = [
    {
      accessorKey: "playerName",
      header: "Player Name",
      enableSorting: true,
      Cell: ({ cell }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={cell.row.original.flagImg}
            alt="Flag"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          <span>{cell.getValue()}</span>{" "}
        </div>
      ),
    },
    {
      accessorKey: "jerseyNumber",
      header: "Jersey Number",
      enableSorting: true,
    },
    {
      accessorKey: "starter",
      header: "Starter",
      Cell: ({ row }) => (row.original.starter ? "Yes" : "No"),
      size: 100,
    },
    {
      accessorKey: "position",
      header: "Position",
      size: 100,
    },
    {
      accessorKey: "height",
      header: "Height",
      Cell: ({ cell }) => formatHeight(cell.getValue()),
      size: 100,
    },
    {
      accessorKey: "weight",
      header: "Weight",
      Cell: ({ cell }) => formatWeight(cell.getValue()),
      size: 100,
    },
    {
      accessorKey: "nationality",
      header: "Nationality",
      size: 100,
    },
    {
      accessorKey: "appearances",
      header: "Appearances",
      enableSorting: true,
      size: 50,
    },
    {
      accessorKey: "minutesPlayed",
      header: "Minutes Played",
      enableSorting: true,
      size: 50,
    },
    {
      accessorKey: "goals",
      header: "Goals",
      size: 50,
    },
    {
      accessorKey: "assists",
      header: "Assists",
      size: 50,
    },
    {
      accessorKey: "cleanSheets",
      header: "Clean Sheets",
      size: 50,
    },
    {
      accessorKey: "saves",
      header: "Saves",
      size: 50,
    },
  ];

  const handleEdit = (row) => {
    setSelectedRow(row.row.original);
    setIsEditDialogOpen(true);
  };
  const handleClose = () => {
    setIsDeleteDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  const handleDeleteOnClick = (row) => {
    setSelectedRow(row.row.original);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deletePlayer(selectedRow.id);
      setReloadGrid(!reloadGrid);
      handleClose();
    } catch (err) {
      console.error("Failed to delete player:", err);
      setError("Failed to delete player. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <Fragment>
      <MantineReactTable
        columns={columns}
        data={filteredPlayersData}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableGlobalFilter={false}
        enableRowActions
        enableColumnPinning
        enableStickyHeader
        enableStickyFooter
        positionActionsColumn="last"
        positionPagination="top"
        enableBottomToolbar={false}
        enableColumnOrdering={false}
        enableColumnFilters={false}
        manualSorting={false}
        enableSorting={true}
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
        state={{ isLoading: loading }}
        initialState={{
          pagination: {
            pageSize: 20,
          },
          columnVisibility: {
            goals: false,
            assists: false,
            cleanSheets: false,
            saves: false,
          },
          sorting: [{ id: "playerName", desc: false }],
        }}
        icons={{
          IconDotsVertical: IconCaretDownFilled,
          IconColumns: IconPlus,
          IconSortDescending: ChevronDownIcon,
          IconSortAscending: ChevronUpIcon,
          IconClearAll: CloseIcon,
        }}
        sorting={[
          {
            accessor: "playerName",
            desc: false,
          },
        ]}
        renderRowActionMenuItems={(row) => (
          <div>
            <MenuHeader>Actions</MenuHeader>
            <Menu.Item onClick={() => handleEdit(row)}>
              <Item>
                <EditIcon />
                <Typography>Edit Player</Typography>
              </Item>
            </Menu.Item>
            <Menu.Item onClick={() => handleDeleteOnClick(row)}>
              <Item>
                <DeleteIcon />
                <Typography>Delete Player</Typography>
              </Item>
            </Menu.Item>
          </div>
        )}
        renderEmptyRowsFallback={(table) => {
          return (
            filteredPlayersData.length === 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "64vh",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <RosterEmptyState emptyState={true} />
              </div>
            )
          );
        }}
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
            <MRT_ShowHideColumnsButton table={row.table} />
          </div>
        )}
        mantinePaginationProps={{
          withEdges: true,
          rowsPerPageOptions: ["20", "50", "100"],
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
            background: colors.neutral.background2,
            color: colors.text.normal,
            padding: "14px",
          },
        }}
        mantineTableHeadRowProps={{
          style: {
            borderLeft: `10px solid ${colors.neutral.background1}`,
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
        mantineTableBodyRowProps={{
          style: {
            background: colors.neutral.background2,
            border: `10px solid ${colors.neutral.background1}`,
            borderRadius: "20px",
          },
        }}
      />
      <DeleteModal
        isDeleteDialogOpen={isDeleteDialogOpen}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
      <EditModal
        isEditDialogOpen={isEditDialogOpen}
        handleClose={handleClose}
        selectedPlayer={selectedRow}
        reloadGrid={reloadGrid}
        setReloadGrid={setReloadGrid}
      />
    </Fragment>
  );
};

export default PlayersGrid;
