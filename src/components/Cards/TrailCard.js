import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    businessContentCard: {
      color: theme.palette.primary.main,
      minWidth: 340,
      margin: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        maxWidth: 340,
        margin: 0,
        marginTop: theme.spacing(2),
        "&:nth-child(1)": {
          marginTop: 0,
        },
      },
    },
    cardContent: {
      paddingTop: theme.spacing(1.25),
    },
    cardActions: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center",
    },
    length: {
      color: "#112152",
    },
  })
);

export default function TrailCard({ title, length, imageSrc }) {
  const classes = useStyles();

  const handleButtonClick = () => {
    alert("Soon, this button will do something :)");
  };

  return (
    <Card className={classes.businessContentCard} data-testid="businessCard">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        padding={2}
        bgcolor={"lightgrey"}
      >
        {title}
      </Box>

      <CardContent className={classes.cardContent}>
        <img width={250} height={250} alt={title} src={imageSrc} />

        <Typography variant="body2" component="p" className={classes.length}>
          <strong>Length:</strong> {length} miles
        </Typography>
      </CardContent>

      <Divider />

      <CardActionArea
        className={classes.cardActions}
        onClick={handleButtonClick}
      >
        Button
      </CardActionArea>
    </Card>
  );
}
