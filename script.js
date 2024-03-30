const markdownInput = document.getElementById('markdownInput');
const markdownPreview = document.getElementById('markdownPreview');

markdownInput.addEventListener('input', updatePreview);

function updatePreview() {
    const markdownText = markdownInput.value;
    markdownPreview.innerHTML = marked(markdownText);
}

function upload() {
    // Function to handle file upload
    alert('Upload function will be implemented here.');
}

function clearPreview() {
    // Function to clear the markdown preview
    markdownInput.value = '';
    markdownPreview.innerHTML = '';
}

function copy() {
    // Function to copy the markdown text
    markdownInput.select();
    document.execCommand("copy");
    alert('Markdown text copied to clipboard.');
}

function download() {
    // Function to download the markdown text
    const markdownText = markdownInput.value;
    const blob = new Blob([markdownText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function italic() {
    // Function to apply italic formatting
    insertTextToTextarea(markdownInput, '*', '*');
}

function bold() {
    // Function to apply bold formatting
    insertTextToTextarea(markdownInput, '**', '**');
}

function header() {
    // Function to apply header formatting
    insertTextToTextarea(markdownInput, '## ', '');
}

function strikethrough() {
    // Function to apply strikethrough formatting
    insertTextToTextarea(markdownInput, '~~', '~~');
}

function code() {
    insertTextToTextarea(markdownInput, '`', '`');
}

function insertTextToTextarea(textarea, startTag, endTag) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(end);

    // Wrap the selected text with Markdown syntax
    const newText = startTag + selectedText + endTag;

    // Update the textarea value with the formatted text
    textarea.value = beforeText + newText + afterText;
    textarea.focus();

    // Adjust cursor position
    textarea.selectionStart = start + startTag.length;
    textarea.selectionEnd = end + startTag.length;
}

// Initial rendering
updatePreview();
