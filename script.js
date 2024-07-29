/**
 * @author umair-ali-bhutto
 * Simple Javascript Project For Counting Characters, Words And Lines 
 */
document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('textArea');
    const characterCountSpan = document.getElementById('characterCount');
    const wordCountSpan = document.getElementById('wordCount');
    const lineCountSpan = document.getElementById('lineCount');

    textArea.addEventListener('input', function() {
        const text = textArea.value;
        const characterCount = text.length;
        const wordCount = text.trim().split(/\s+/).length;
        const lineCount = text.split('\n').length;

        characterCountSpan.textContent = characterCount;
        wordCountSpan.textContent = wordCount;
        lineCountSpan.textContent = lineCount;
    });
});
