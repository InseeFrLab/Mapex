import { Card, Button } from "react-native-elements";

const Notification = () => {
  function displayNotification(title, text) {
    navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title);
    });
}

const setNotification = () => {
    const title = "Test Notification Title";
    const text = 'Première notification';

    if (!('Notification' in window)) {
        alert('Ce navigateur ne prend pas en charge la notification de bureau')
    }
    else if (Notification.permission === 'granted') {
        // Si tout va bien, créons une notification
        // makeNotification(title, text);
        displayNotification(title, text)
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
            // Si l'utilisateur accepte, créons une notification
            if (permission === 'granted') {
                // makeNotification(title, text);
                displayNotification(title, text)
            }
        })
    }

}

  return (
    <Card>
      <Card.Title>Recevoir une Notification</Card.Title>
      <Card.Divider />
      <Button title="Me Notifier" onPress={setNotification}/>
    </Card>
  );
};
export default Notification;
