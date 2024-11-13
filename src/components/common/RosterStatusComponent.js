import { styled } from "@mui/material";
import WarningIcon from "../../assets/icons/WarningIcon";
import colors from "../../constants/colors";
import CustomButton from "./CustomButton";
import { useRoster } from "../../providers/RosterContextProvider";

const Container = styled("div")(({ emptyState }) => ({
  width: emptyState ? "none" : "70%",
  borderRadius: "8px",
  boxShadow: "rgba(0, 0, 0, 0.56) 0px 0px 70px 4px",
  padding: "24px",
  background: colors.neutral.background2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
}));

const Title = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const TitleText = styled("div")({
  fontSize: "18px",
  fontWeight: 600,
  color: colors.text.heading,
  paddingLeft: "5px",
});

const ContentText = styled("div")({
  fontSize: "14px",
  fontWeight: 400,
  color: colors.text.normal,
});

const Button = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const HeaderRow = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: colors.text.normal,
  width: "90%",
  gap: "8px",
  marginLeft: "10px",
});

const DataRowContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "8px",
  width: "90%",
});

const DataRow = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: "45px",
  background: colors.neutral.background1,
  width: "100%",
  borderRadius: "8px",
});

const PositionText = styled("div")({
  color: colors.text.normal,
  fontSize: "14px",
  fontWeight: 500,
});

const RequiredText = styled("div")({
  color: colors.text.normal,
});

const CurrentText = styled("div")({
  color: colors.primary.yellow,
  fontSize: "14px",
  fontWeight: 500,
});

const RosterStatusComponent = ({ emptyState, errorContent, startersData }) => {
  const { setShowImportedFiles } = useRoster();

  return (
    <Container emptyState={emptyState}>
      <Title>
        <WarningIcon />
        <TitleText>
          {emptyState ? "No Player Data found" : errorContent?.errorTitle}
        </TitleText>
      </Title>

      <ContentText>
        {emptyState
          ? "Please import your roster first"
          : errorContent?.errorMessage}
      </ContentText>

      {emptyState ? (
        <Button>
          <CustomButton
            text="Go to Import list page"
            onClick={() => setShowImportedFiles(true)}
            type="secondary"
          />
        </Button>
      ) : (
        startersData && (
          <>
            <HeaderRow>
              <div>Positions</div>
              <div>Required</div>
              <div>Current</div>
            </HeaderRow>
            <DataRowContainer>
              {startersData.map((row) => (
                <DataRow key={row.position}>
                  <PositionText>{row.position}</PositionText>
                  <RequiredText>{row.required}</RequiredText>
                  <CurrentText>{row.current}</CurrentText>
                </DataRow>
              ))}
            </DataRowContainer>
          </>
        )
      )}
    </Container>
  );
};

export default RosterStatusComponent;
