var quoteObject = [
    {
        quoteText: "“Be yourself; everyone else is already taken.”",
        Writer: "― Oscar Wilde"
    },
    {
        quoteText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        Writer: "― Albert Einstein"
    },
    {
        quoteText: "“So many books, so little time.”",
        Writer: "― Frank Zappa"
    },
    {
        quoteText: "“A room without books is like a body without a soul.”",
        Writer: "― Marcus Tullius Cicero"
    },
    {
        quoteText: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        Writer: "― Ralph Waldo Emerson"
    },
    {
        quoteText: "“The most courageous act is still to think for yourself. Aloud.”",
        Writer: "― Coco Chanel"
    },
    {
        quoteText: "“I will not let anyone walk through my mind with their dirty feet.”",
        Writer: "― mahatma gandhi"
    },
    {
        quoteText: "“I, myself, am made entirely of flaws, stitched together with good intentions.”",
        Writer: "― Augusten Burroughs"
    },
    {
        quoteText: "“I'm not in this world to live up to your expectations and you're not in this world to live up to mine.”",
        Writer: "― Bruce Lee"
    },
    {
        quoteText: "“why are trying so hard to fit in, when you're born to stand out”",
        Writer: "― Oliver James"
    },
]

var lastQuoteNum = 0;
var previousQuoteNum = [];

var shareQuoteTextNext;
var shareQuoteWriterNext;

var shareQuoteTextPrevious;
var shareQuoteWriterPrevious;

var nextQuote = true;

function nextBtn() {

    var quote = Math.floor(Math.random() * quoteObject.length);

    for (var i = 0; i < quoteObject.length; i++) {

        if (i == quote) {

            if (quote != lastQuoteNum) {
                document.getElementById('quotes').innerHTML = quoteObject[i].quoteText;
                document.getElementById('writer').innerHTML = quoteObject[i].Writer;

                previousQuoteNum.push(quote);
                lastQuoteNum = quote;

                shareQuoteTextNext = quoteObject[i].quoteText;
                shareQuoteWriterNext = quoteObject[i].Writer;
                nextQuote = true;
            }
            else {
                quote = Math.floor(Math.random() * 10);
                i = -1;
            }
        }
    }
}

function previousBtn() {

    for (var j = 0; j < previousQuoteNum.length; j++) {

        if (j == previousQuoteNum.length - 1 && previousQuoteNum.length > 1) {
            document.getElementById('quotes').innerHTML = quoteObject[previousQuoteNum[j - 1]].quoteText;
            document.getElementById('writer').innerHTML = quoteObject[previousQuoteNum[j - 1]].Writer;
            previousQuoteNum.pop(1)

            shareQuoteTextPrevious = quoteObject[previousQuoteNum[j - 1]].quoteText;
            shareQuoteWriterPrevious = quoteObject[previousQuoteNum[j - 1]].Writer;
            nextQuote = false;
        }

    }
}


function tweetQuote() {
    if (nextQuote == true) {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${shareQuoteTextNext}  ${shareQuoteWriterNext}`;
        window.open(tweetUrl, "_blank");
    }
    else {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${shareQuoteTextPrevious}  ${shareQuoteWriterPrevious}`;
        window.open(tweetUrl, "_blank");
    }

}

function copyQuote() {
    if (nextQuote == true) {
        navigator.clipboard.writeText(shareQuoteTextNext + ' ' + shareQuoteWriterNext);
    }
    else {
        navigator.clipboard.writeText(shareQuoteTextPrevious + ' ' + shareQuoteWriterPrevious);
    }
}

function speak() {

    if (nextQuote == true) {
        var voiceQuoteNext = shareQuoteTextNext + ' ' + shareQuoteWriterNext;
        var read = new SpeechSynthesisUtterance(String(voiceQuoteNext));
        read.lang = "en";
        window.speechSynthesis.speak(read);
    }
    else {
        var voiceQuotePrevious = shareQuoteTextPrevious + ' ' + shareQuoteWriterPrevious;
        var read = new SpeechSynthesisUtterance(String(voiceQuotePrevious));
        read.lang = "en";
        window.speechSynthesis.speak(read);    }

}