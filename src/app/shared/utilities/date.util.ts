export function formatDate(value: string, includeTime = false): string {
  if (!value) return '—';
  return new Intl.DateTimeFormat('ar-EG', {
    dateStyle: 'medium',
    ...(includeTime ? { timeStyle: 'short' as const } : {}),
  }).format(new Date(value));
}
