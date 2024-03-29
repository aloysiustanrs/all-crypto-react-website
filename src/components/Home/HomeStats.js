import React from "react";
import { Grid, Typography, Divider, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import millify from "millify";

const StatCard = styled(Card)`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeStats = ({ stats }) => {
  let coinPercentageChange = stats.market_cap_change_percentage_24h_usd;

  return (
    <>
      <Divider sx={{ marginY: 5 }} />
      <Grid container spacing={3} sx={{ marginBottom: 6 }}>
        <Grid item xs={12} md={6} xl={3}>
          <StatCard>
            <Typography variant="subtitle2" mb={1}>
              Total Market Cap:
            </Typography>
            <Typography variant="h6">
              $&nbsp;
              {millify(`${stats.total_market_cap.usd}`, {
                precision: 2,
              })}
            </Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <StatCard>
            <Typography variant="subtitle2" mb={1}>
              Total Coins:
            </Typography>
            <Typography variant="h6">
              {stats.active_cryptocurrencies}
            </Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <StatCard>
            <Typography variant="subtitle2" mb={1}>
              Total 24 Hour Volume:
            </Typography>
            <Typography variant="h6">
              $&nbsp;
              {millify(`${stats.total_volume.usd}`, {
                precision: 2,
              })}
            </Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <StatCard>
            <Typography variant="subtitle2" mb={1}>
              Total Market Cap % Change in last 24 hours:
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: coinPercentageChange > 0 ? "#93E318" : "#FE4017" }}
            >
              {millify(`${stats.market_cap_change_percentage_24h_usd}`, {
                precision: 2,
              })}
              &nbsp; %
            </Typography>
          </StatCard>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 5 }} />
    </>
  );
};

export default HomeStats;
