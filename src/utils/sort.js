export const sortNewsByDate = (news) => {
  return news.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
};