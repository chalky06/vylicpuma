// Select the background div
const bg = document.querySelector('.text-bg');

// The string to repeat
const text = "tfcmrglezxnqkyisduawhobpcffgfexsuovqnoxyrccfbtuorugkihbyewnqsxacmdtlyrnxukwhzranoyqmcdgxlirsuweynaztorqhxdcmlguifopqgsjvmjkwnryxacoqsmhspvoexruoyzaqcmnwdsyrghtxluisvncmfeeywrnocxqlyatshzrdguiboeqcmnwarxyosludhtgzkisbutcrynoaqmwxluzthsdkyxigtqsvohraxoycdqnmwzulsthgipvurmnoycaxqzutsdhlkigcfuxfforanoqxcywzdutslhkgmuifonaqrycxwzutlshkgmddsbdltcyrnoaqwxzydutslhkgmiefkhsxkjsopshipjfxhjhskkejoldgosfcskfjosocpxqrnowkgejscetq";

// Repeat until it fills a very large space
let repeated = "";
while (repeated.length < 500000) {  // you can increase this for extreme zoom
    repeated += text;
}

// Set the repeated text as content
bg.textContent = repeated;
