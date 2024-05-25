
function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



function downloadExe() {
    // URL of the .exe file
    var exeUrl = "./assets/BasicFeedbackSystem.exe";

    // Create a link element
    var link = document.createElement("a");
    link.href = exeUrl;

    // Set the download attribute and filename
    link.download = "file.exe";

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
}

function downloadP2Exe() {
    // URL of the .exe file
    var exeUrl = "./assets/FaceDetectionApp.exe";

    // Create a link element
    var link = document.createElement("a");
    link.href = exeUrl;

    // Set the download attribute and filename
    link.download = "file.exe";

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
}