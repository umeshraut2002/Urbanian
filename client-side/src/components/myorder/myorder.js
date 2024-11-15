// You can add event listeners for buttons if needed to redirect users to the Play Store or App Store.
// For example:

document.querySelector('.android-btn').addEventListener('click', () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.yourapp'; // Link to your app's Play Store page
});

document.querySelector('.ios-btn').addEventListener('click', () => {
    window.location.href = 'https://apps.apple.com/us/app/your-app-name/id1234567890'; // Link to your app's App Store page
});
