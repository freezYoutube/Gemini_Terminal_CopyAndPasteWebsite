<script>
function copyLongPrompt() {
    // Get the hidden element holding the prompt text
    const promptText = document.getElementById("longPromptStorage").textContent;

    // Copy it straight to the clipboard
    navigator.clipboard.writeText(promptText).then(() => {
        const btn = document.getElementById("copyPromptBtn");
        btn.innerText = "Prompt Copied! ✓";
        btn.style.backgroundColor = "#27c93f"; // Changes to Mac success green
        btn.style.color = "#ffffff";

        // Reset the button look after 2.5 seconds
        setTimeout(() => {
            btn.innerText = "Copy Long Prompt";
            btn.style.backgroundColor = "#ffbd2e"; // Back to original Mac yellow
            btn.style.color = "#12131a";
        }, 2500);
    }).catch(err => {
        console.error("Could not copy prompt automatically: ", err);
    });
}
</script>
