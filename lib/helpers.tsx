interface Duration {
  years: number;
  months: number;
  days: number;
}

export function getDateDuration(startDate: Date, endDate: Date): Duration {
  // Calculate difference in milliseconds
  const diffMilliseconds = endDate.getTime() - startDate.getTime();

  // Convert difference to days
  const diffDays = diffMilliseconds / (1000 * 3600 * 24);

  // Calculate years
  const years = Math.floor(diffDays / 365);

  // Calculate remaining days after whole years
  const remainingDaysAfterYears = diffDays % 365;

  // Calculate months from remaining days
  const months = Math.floor(remainingDaysAfterYears / 30);

  // Calculate remaining days after whole months
  const days = Math.floor(remainingDaysAfterYears % 30);

  return {
    years: years,
    months: months,
    days: days,
  };
}
