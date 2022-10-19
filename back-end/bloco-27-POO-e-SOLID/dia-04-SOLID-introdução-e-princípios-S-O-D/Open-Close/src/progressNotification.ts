//Antes
export function progressNotificationBefore(
  message: string,
  notificationType: string,
): void {
  switch (notificationType) {
    case 'Email':
      console.log('Email: ', message);
      break;
    case 'Phone':
      console.log('Phone: ', message);
      break;
    case 'Console':
      console.log('Console: ', message);
      break;
    default:
      console.log(message);
      break;
  }
}

//Depois
type Platform = {
  name: string;
}

export default function progressNotificationAfter(
  message: string,
  platform: Platform,
): void {
  console.log(`${platform.name}: ${message}`);
}