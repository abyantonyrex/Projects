document.addEventListener('DOMContentLoaded', () => {
    // Select the login container element
    const loginContainer = document.querySelector('.menu');
  
    // Create a dropdown menu element
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('login-dropdown');
    
    // Set basic styles for the dropdown (these can be moved to CSS later)
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.top = '100%'; // Position below the login element
    dropdownMenu.style.right = '10%';
    dropdownMenu.style.backgroundColor = '#fff';
    dropdownMenu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    dropdownMenu.style.padding = '10px';
    dropdownMenu.style.display = 'none'; // Hide it by default
    dropdownMenu.style.borderRadius = '8px';
    dropdownMenu.style.width = '120px';
    
    
    // Populate the dropdown menu with sample links
    dropdownMenu.innerHTML = `
      <a href="/profile" style="display:block; padding:5px 10px;">Profile</a>
      <a href="/settings" style="display:block; padding:5px 10px;">Settings</a>
      <a href="/logout" style="display:block; padding:5px 10px;">Logout</a>
    `;
    
    // Ensure the login container is positioned relatively
    loginContainer.style.position = 'relative';
    loginContainer.appendChild(dropdownMenu);
  
    // Show dropdown on mouseover
    loginContainer.addEventListener('mouseover', () => {
      dropdownMenu.style.display = 'block';
    });
  
    // Hide dropdown on mouseout
    loginContainer.addEventListener('mouseout', (e) => {
      // Optionally, you can check e.relatedTarget to ensure the mouse left the login area entirely
      dropdownMenu.style.display = 'none';
    });
  });