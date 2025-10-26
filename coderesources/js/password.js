// Password handling module with light obfuscation and improved UX
// Note: client-side protection is inherently discoverable. For real security
// move auth to a server-side check.

(function () {
    const form = document.getElementById('passwordForm');
    const input = document.getElementById('passwordInput');
    const protectedContent = document.getElementById('protectedContent');
    const passwordPrompt = document.getElementById('passwordPrompt');
    const errorMessage = document.getElementById('errorMessage');

    // Light obfuscation: the password characters are XOR'd with a small key.
    // This hides the plain string from casual viewers but is not secure.
    const _obf = [91,84,90,83,69,120,111]; // obfuscated char codes
    const _key = 23;

    function decodeObf(arr, key) {
        return String.fromCharCode(...arr.map(c => c ^ key));
    }

    const correctPassword = decodeObf(_obf, _key);

    // Improve accessibility and UX
    if (input) {
        input.setAttribute('autocomplete', 'new-password');
        input.setAttribute('aria-label', 'Member password');
    }

    function showError() {
        if (errorMessage) {
            errorMessage.style.display = 'block';
            // small shake animation
            errorMessage.animate([
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(0)' }
            ], { duration: 260 });
        }
    }

    function revealProtected() {
        if (passwordPrompt) {
            passwordPrompt.style.display = 'none';
        }
        if (protectedContent) {
            protectedContent.style.display = 'block';
            protectedContent.classList.remove('hidden');
            // trigger CSS animation class
            protectedContent.classList.add('reveal');
        }
    }

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const enteredPassword = input ? input.value : '';
            if (enteredPassword === correctPassword) {
                if (errorMessage) errorMessage.style.display = 'none';
                revealProtected();
            } else {
                showError();
                if (input) input.value = '';
                if (input) input.focus();
            }
        });
    }
})();