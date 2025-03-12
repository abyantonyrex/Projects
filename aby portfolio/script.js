document.getElementById("resume-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1UTNjsSezF7yvTAKSDlYNKmz9py-JIW5M";
    link.download = "aby_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
