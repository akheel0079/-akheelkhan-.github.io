

// Function to get a cookie value by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

function checkAuth() {
    const email = localStorage.getItem('currentUser');
    if (!email) return null;
  
    const user = JSON.parse(localStorage.getItem('user_' + email));
    return user || null;
  }

// Function to log out the user
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  }