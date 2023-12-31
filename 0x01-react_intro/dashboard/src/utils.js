export function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Fobistems Corp.";
  } 
  else {
    return "Fobistems Corp. main dashboard";
  }
}

export function getLatestNotification() {
  return (
      '<strong>Urgent requirement</strong> - complete by EOD'
  );
}
