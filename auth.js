function login(role) {
  // Store the current user role in localStorage for session management
  localStorage.setItem('currentUserRole', role);

  if (role === "admin") {
    window.location.href = "admin.html";
  } else if (role === "government") {
    window.location.href = "government.html";
  } else {
    window.location.href = "victim.html";
  }
}

function logout() {
  // Clear session data
  localStorage.removeItem('currentUserRole');
  window.location.href = "index.html";
}

// Check if user is logged in (optional utility function)
function isLoggedIn() {
  return localStorage.getItem('currentUserRole') !== null;
}
