export const sortNewsByDate = (news) => {
  if (!Array.isArray(news)) {
    return [];
  }

  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedNews;
};

export const sortOrdersByDate = (orders) => {
  if (!Array.isArray(orders)) {
    return [];
  }

  const sortedOrders = orders.slice().sort((a, b) => new Date(b.create_at) - new Date(a.create_at));

  return sortedOrders;
};
