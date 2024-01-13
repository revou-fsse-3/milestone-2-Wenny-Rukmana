const PublishedDate = ({ publishedAt }: { publishedAt: string }) => {
  const yearMonth = publishedAt.slice(0, 10);

  return (
    <p>
      <small>Published: {yearMonth} </small>
    </p>
  );
};

export default PublishedDate;
