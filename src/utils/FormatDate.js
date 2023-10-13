export default function formatDate(date) {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const time = dateObj.toLocaleTimeString('es-ES', {timeZone: 'America/Bogota', hour: '2-digit', minute:'2-digit', hour12: true});
  const output = `${day}/${month}/${year} ${time}`;
  return output;
}