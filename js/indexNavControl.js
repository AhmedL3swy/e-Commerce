document.addEventListener("DOMContentLoaded", function() {
    const activeUser = JSON.parse(localStorage.getItem("activeuser"));
    const AccountTypes = ["guest", "customer", "seller", "admin"];

    if (activeUser) {
        document.getElementById("navbarList").innerHTML += `
            <li class="nav-item">
                <a class="nav-link" href="#">Hello, ${activeUser.email} Type: ${AccountTypes[activeUser.accountType]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="logout">Logout</a>
            </li>
        `;

        document.getElementById("logout").addEventListener("click", () => {
            localStorage.removeItem("activeuser");
            window.location.replace("./index.html");
        });
    } else {
        document.getElementById("navbarList").innerHTML += `
            <li class="nav-item">
                <a class="nav-link" href="pages/signin.html">Sign In</a>
            </li>
        `;
    }
});
