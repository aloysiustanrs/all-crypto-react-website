export const CoinList = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h%2C7d`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

export const TrendingCoins = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const GlobalStats = () => `https://api.coingecko.com/api/v3/global`;

export const ExchangesList = () => `https://api.coingecko.com/api/v3/exchanges`;

export const NewsList = () =>
  `https://gnews.io/api/v4/search?q=crypto&country=us&language=en&token=${process.env.REACT_APP_GNEWS}`;
