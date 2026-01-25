// https://www.codewars.com/kata/5d98b6b38b0f6c001a461198/train/python
// ver gavakete
# Morse code table
MORSE_CODE = {
    'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',  'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',  'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',  'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
    ',': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.',
    '-': '-....-', '(': '-.--.',  ')': '-.--.-'
}

# Inverse table for decoding
INV_MORSE_CODE = {v: k for k, v in MORSE_CODE.items()}

def code(strng):
    # Split input into words
    words = strng.upper().split(' ')
    morse_words = []
    for word in words:
        # Convert each letter to Morse
        morse_letters = [MORSE_CODE[c] for c in word]
        morse_words.append(' '.join(morse_letters))
    # Join words with 3 spaces
    return '   '.join(morse_words)

def decode(strng):
    # Split Morse code into words by 3 spaces
    words = strng.strip().split('   ')
    decoded_words = []
    for word in words:
        letters = word.split(' ')
        decoded_letters = [INV_MORSE_CODE[l] for l in letters]
        decoded_words.append(''.join(decoded_letters))
    return ' '.join(decoded_words)
