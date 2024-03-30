export const sortNewsByDate = (news) => {
  if (!Array.isArray(news)) {
    return [];
  }

  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedNews;
};