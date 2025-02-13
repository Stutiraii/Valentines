document.addEventListener("DOMContentLoaded", () => {
    let noClicks = 0;
    const maxNoClicks = 5;
    const minNoScale = 0.65;
    let noScale = 1;
    let yesScale = 1;
    const gifElement = document.getElementById("cat-gif");  // Corrected ID here
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const buttonContainer = document.querySelector(".button-container"); // Updated class here
    const yesButtonStyle = window.getComputedStyle(yesButton);
    const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

    // Array of gifs - in order
    const gifs = [
        "../img/huhcat.gif", 
        "../img/starecat.gif", 
        "../img/angrycat.gif", 
        "../img/cat.gif", 
        "../img/sadcat.gif", 
    ];

    // Array of messages
    const buttonMessages = [
        "Huh???", 
        "Are you sure??",
        "YOU DARE!!",
        "Ready for a Beating??", 
        "STILL NOO!???"
    ];

    // "No" button clicked
    noButton.addEventListener("click", () => {
        if (noClicks < maxNoClicks) {
            // Change image
            gifElement.src = gifs[noClicks];
        }

        // Change "No" button text
        noButton.textContent = buttonMessages[noClicks % maxNoClicks];

        // Adjust button width to fit text
        noButton.style.width = 'auto';
        noButton.style.width = `${noButton.scrollWidth}px`;

        // Shrink the "No" button if it's above the minimum scale
        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }

        // Calculate the scaled width of the "Yes" button
        const baseWidth = parseFloat(yesButtonStyle.width);
        const scaledWidth = baseWidth * yesScale;

        // Check if the scaled width is less than the max width
        if (scaledWidth < maxYesWidth) {
            yesScale += 0.1; // Increment scale by a smaller step (adjust as needed)
            yesButton.style.transform = `scale(${yesScale})`;

            // Adjust the gap dynamically based on button growth
            const currentGap = parseFloat(buttonContainer.style.gap) || 20;
            const newGap = currentGap + 5; // Increase gap gradually
            buttonContainer.style.gap = `${newGap}px`;
        }

        // Increment the number of clicks
        noClicks++;
    });

    // "Yes" button clicked
    yesButton.addEventListener("click", () => {
        // Redirect to yes.html
        window.location.href = "yes.html";
    });
});
