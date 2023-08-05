function setDefault() {
    // Show the home page content by default
    const homePage = document.getElementById('home');
    homePage.style.display = 'block';

    // Set the 'active' class for the home menu item
    const homeMenuItem = document.querySelector('ul li a[href="#"]');
    homeMenuItem.classList.add('active');
}

function showPage(pageId, menuItem) {
    // Hide all pages
    const pages = document.querySelectorAll('div[id]');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';

    // Remove 'active' class from all menu items
    const menuItems = document.querySelectorAll('ul li a');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the selected menu item
    menuItem.classList.add('active');

}