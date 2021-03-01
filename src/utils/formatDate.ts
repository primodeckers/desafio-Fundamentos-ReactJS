const formatDate = (created_at: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(created_at);

export default formatDate;
