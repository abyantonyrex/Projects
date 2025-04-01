document.getElementById("resume-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1UTNjsSezF7yvTAKSDlYNKmz9py-JIW5M";
    link.download = "aby_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// on click redirect to the project page proj1,proj2,proj3
document.addEventListener('click', function (event) {
    const project = event.target.closest('.project');
    if (project && project.hasAttribute('data-project-url')) {
        const projectUrl = project.getAttribute('data-project-url');
        if (projectUrl) {
            window.open(projectUrl, '_blank'); // Opens link in a new tab
        } else {
            console.error('Project URL not found');
        }
    } else if (project) {
        console.error('Project element found but missing data-project-url attribute');
    }
});


