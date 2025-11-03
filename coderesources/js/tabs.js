// Tab functionality for member resources
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function switchTab(e) {
        // Remove active class from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Remove active class from all panels
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
        });

        // Add active class to clicked button
        e.target.classList.add('active');

        // Show corresponding panel
        const tabId = e.target.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    }

    // Add click event to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});