// For all over-lay

var overlay = document.getElementById("over-lay");

// For all over-lay

// For Html Quiz modal

var htmlContainerOpen = document.getElementById("html-container");

var closeHtmlQuiz = () => {
    htmlContainerOpen.style.top = "-50%";
    overlay.style.width = "0%";
}

// For Html Quiz modal

// For Css Quiz modal

var cssContainerOpen = document.getElementById("css-container");

var closeCssQuiz = () => {
    cssContainerOpen.style.top = "-50%";
    overlay.style.width = "0%";
}

// For Css Quiz modal

// For JS Quiz modal

var jsContainerOpen = document.getElementById("js-container");

var closeJSQuiz = () => {
    jsContainerOpen.style.top = "-50%";
    overlay.style.width = "0%";
}

// For JS Quiz modal

// For Bootstrap Quiz modal

var bootstrapContainerOpen = document.getElementById("bootstrap-container");

var closeBootstrapQuiz = () => {
    bootstrapContainerOpen.style.top = "-50%";
    overlay.style.width = "0%";
}

// For Bootstrap Quiz modal

var quizScoreOverlay = document.getElementById("quiz-score-overlay");

// For HTML-quiz Question

var allHtmlQuestion = [
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "HighText Machine Language"
        ],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        options: [
            "<meta>",
            "<title>",
            "<head>",
            "<header>"
        ],
        correctAnswer: "<title>"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<nav>"
        ],
        correctAnswer: "<a>"
    },
    {
        question: "Which attribute is used to provide alternative text for an image?",
        options: [
            "alt",
            "title",
            "src",
            "description"
        ],
        correctAnswer: "alt"
    },
    {
        question: "What is the purpose of the <head> element in an HTML document?",
        options: [
            "To display content to the user",
            "To define metadata about the document",
            "To link to external CSS and JavaScript files",
            "Both B and C"
        ],
        correctAnswer: "Both B and C"
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: [
            "<tr>",
            "<td>",
            "<th>",
            "<table>"
        ],
        correctAnswer: "<tr>"
    },
    {
        question: "How do you specify the language of an HTML document?",
        options: [
            "Using the <meta> tag",
            "Using the lang attribute in the <html> tag",
            "Using the <head> tag",
            "Using the language attribute in the <body> tag"
        ],
        correctAnswer: "Using the lang attribute in the <html> tag"
    },
    {
        question: "Which HTML element is used to define the main content of a document?",
        options: [
            "<main>",
            "<content>",
            "<section>",
            "<article>"
        ],
        correctAnswer: "<main>"
    },
    {
        question: "Which tag is used to create an ordered list in HTML?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        correctAnswer: "<ol>"
    },
    {
        question: "Which HTML tag is used to embed a video in a webpage?",
        options: [
            "<video>",
            "<embed>",
            "<media>",
            "<iframe>"
        ],
        correctAnswer: "<video>"
    }
];

var htmlQuestion = document.getElementById("html-question");

var htmlOptions = [
    document.getElementById("html-option-1"),
    document.getElementById("html-option-2"),
    document.getElementById("html-option-3"),
    document.getElementById("html-option-4")
];

var htmlQuestionIndex = 0;


var startHtmlQuiz = () => {
    // To Show Modal

    htmlContainerOpen.style.top = "50%";
    overlay.style.width = "100%";

    // To Show Modal

    htmlQuestion.innerHTML = allHtmlQuestion[htmlQuestionIndex].question;

    allHtmlQuestion[htmlQuestionIndex].options.forEach((value, index) => {
        htmlOptions[index].innerText = value;
    });
};

// For Scoring

var htmlScoreSpan = document.getElementById("html-score");

var htmlQuizScore = document.getElementById("html-quiz-score");

var HTMLScore = 0;

var htmlScoreCounter = () => {

    var checkedAns = document.querySelector("input[type='radio']:checked");

    if (checkedAns === null) {
        alert("Plase select one option");
        htmlQuestionIndex--;
    } else {
        if (checkedAns.nextElementSibling.innerText === allHtmlQuestion[htmlQuestionIndex].correctAnswer) {
            HTMLScore++;
            checkedAns.checked = false;
        } else {
            checkedAns.checked = false;
        }
    }

};
// For Scoring

var htmlNext = () => {

    // For Checking
    htmlScoreCounter();
    // For Checking

    htmlQuestionIndex++;

    htmlScoreSpan.innerText = HTMLScore;

    // For HTML-quiz Score modal

    if (htmlQuestionIndex === allHtmlQuestion.length) {

        quizScoreOverlay.style.display = "block";
        htmlQuizScore.style.display = "flex";

        return;
    }

    // For HTML-quiz Score modal

    // For Dynamic Question rander

    htmlQuestion.innerHTML = allHtmlQuestion[htmlQuestionIndex].question;

    allHtmlQuestion[htmlQuestionIndex].options.forEach((value, index) => {
        htmlOptions[index].innerText = value;
    });
    // For Dynamic Question rander

};

// For HTML-quiz Question

// For HTML-quiz Score modal

var htmlScoreClose = () => {

    quizScoreOverlay.style.display = "none";
    htmlQuizScore.style.display = "none";

    location.reload();
}

// For HTML-quiz Score modal

// For CSS-quiz Question

var allCssQuestion = [
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to change the background color of an element?",
        options: [
            "color",
            "background-color",
            "bgcolor",
            "background"
        ],
        correctAnswer: "background-color"
    },
    {
        question: "How do you make text bold in CSS?",
        options: [
            "font-weight: bold;",
            "text-style: bold;",
            "font-style: bold;",
            "text-weight: bold;"
        ],
        correctAnswer: "font-weight: bold;"
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-style",
            "font-size",
            "text-size",
            "text-style"
        ],
        correctAnswer: "font-size"
    },
    {
        question: "What is the correct syntax to link an external CSS file?",
        options: [
            "<link href='styles.css' rel='stylesheet'>",
            "<style src='styles.css'>",
            "<stylesheet>styles.css</stylesheet>",
            "<css link='styles.css'>"
        ],
        correctAnswer: "<link href='styles.css' rel='stylesheet'>"
    },
    {
        question: "Which property is used to set the space between lines of text?",
        options: [
            "letter-spacing",
            "line-spacing",
            "line-height",
            "text-spacing"
        ],
        correctAnswer: "line-height"
    },
    {
        question: "How do you add a shadow to an element in CSS?",
        options: [
            "box-shadow: 10px 10px 5px grey;",
            "shadow: 10px 10px 5px grey;",
            "text-shadow: 10px 10px 5px grey;",
            "element-shadow: 10px 10px 5px grey;"
        ],
        correctAnswer: "box-shadow: 10px 10px 5px grey;"
    },
    {
        question: "Which CSS property is used to make a font italic?",
        options: [
            "font-style",
            "font-weight",
            "text-style",
            "font-variant"
        ],
        correctAnswer: "font-style"
    },
    {
        question: "How do you select an element with the ID 'header' in CSS?",
        options: [
            "#header",
            ".header",
            "header",
            "id:header"
        ],
        correctAnswer: "#header"
    },
    {
        question: "Which property is used to control the layout of flexbox items?",
        options: [
            "justify-content",
            "align-items",
            "display",
            "flex"
        ],
        correctAnswer: "justify-content"
    }
];

var cssQuestion = document.getElementById("css-question");

var cssOptions = [
    document.getElementById("css-option-1"),
    document.getElementById("css-option-2"),
    document.getElementById("css-option-3"),
    document.getElementById("css-option-4")
];

var cssQuestionIndex = 0;

var startCssQuiz = () => {

    // To Show Modal

    cssContainerOpen.style.top = "50%";
    overlay.style.width = "100%";

    // To Show Modal

    cssQuestion.innerHTML = allCssQuestion[cssQuestionIndex].question;

    allCssQuestion[cssQuestionIndex].options.forEach((value, index) => {
        cssOptions[index].innerText = value;
    })

};

// For Scoring

var cssScoreSpan = document.getElementById("css-score");

var cssQuizScore = document.getElementById("css-quiz-score");

var CSSscore = 0;

var cssScoreCounter = () => {

    var checkedAns = document.querySelector("input[type='radio']:checked");

    if (checkedAns === null) {
        alert("Plase select one option");
        cssQuestionIndex--;
    } else {
        if (checkedAns.nextElementSibling.innerText === allCssQuestion[cssQuestionIndex].correctAnswer) {
            CSSscore++;
            checkedAns.checked = false;
        } else {
            checkedAns.checked = false;
        }
    }

};
// For Scoring

var cssNext = () => {

    // For Checking
    cssScoreCounter();
    // For Checking

    cssQuestionIndex++;

    cssScoreSpan.innerText = CSSscore;

    // For CSS-quiz Score modal
    if (cssQuestionIndex === allCssQuestion.length) {

        quizScoreOverlay.style.display = "block";
        cssQuizScore.style.display = "flex";

        return;
    }
    // For CSS-quiz Score modal

    // For Dynamic Question rander

    cssQuestion.innerHTML = allCssQuestion[cssQuestionIndex].question;

    allCssQuestion[cssQuestionIndex].options.forEach((value, index) => {
        cssOptions[index].innerText = value;
    });
    // For Dynamic Question rander

};

// For CSS-quiz Question

// For CSS-quiz Score modal

var cssScoreClose = () => {

    quizScoreOverlay.style.display = "none";
    cssQuizScore.style.display = "none";

    location.reload();
}

// For CSS-quiz Score modal


// For JS-quiz Question

var allJSQuestion = [
    {
        question: "What is JavaScript primarily used for?",
        options: [
            "Styling web pages",
            "Structuring web pages",
            "Adding interactivity to web pages",
            "Managing databases"
        ],
        correctAnswer: "Adding interactivity to web pages"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the correct syntax to print a message in the console?",
        options: [
            "print('Hello World')",
            "console.log('Hello World')",
            "echo('Hello World')",
            "document.write('Hello World')"
        ],
        correctAnswer: "console.log('Hello World')"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function = myFunction()",
            "function myFunction()",
            "def myFunction()",
            "func myFunction()"
        ],
        correctAnswer: "function myFunction()"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "String",
            "Boolean",
            "Number",
            "Character"
        ],
        correctAnswer: "Character"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "myFunction(call)"
        ],
        correctAnswer: "myFunction()"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "=",
            "==",
            "===",
            "=>"
        ],
        correctAnswer: "="
    },
    {
        question: "What is the output of '2' + 2 in JavaScript?",
        options: [
            "4",
            "22",
            "'4'",
            "Error"
        ],
        correctAnswer: "22"
    },
    {
        question: "How do you write a comment in JavaScript?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->",
            "Both A and B"
        ],
        correctAnswer: "Both A and B"
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correctAnswer: "push()"
    }
];

var jsQuestion = document.getElementById("js-question");

var jsOptions = [
    document.getElementById("js-option-1"),
    document.getElementById("js-option-2"),
    document.getElementById("js-option-3"),
    document.getElementById("js-option-4")
];

var jsQuestionIndex = 0;

var startJSQuiz = () => {
    // To Show Modal

    jsContainerOpen.style.top = "50%";
    overlay.style.width = "100%";

    // To Show Modal

    jsQuestion.innerHTML = allJSQuestion[jsQuestionIndex].question;

    allJSQuestion[jsQuestionIndex].options.forEach((value, index) => {
        jsOptions[index].innerText = value;
    })

};

// For Scoring

var jsScoreSpan = document.getElementById("js-score");

var jsQuizScore = document.getElementById("js-quiz-score");

var JSscore = 0;

var jsScoreCounter = () => {

    var checkedAns = document.querySelector("input[type='radio']:checked");

    if (checkedAns === null) {
        alert("Plase select one option");
        jsQuestionIndex--;
    } else {
        if (checkedAns.nextElementSibling.innerText === allJSQuestion[jsQuestionIndex].correctAnswer) {
            JSscore++;
            checkedAns.checked = false;
        } else {
            checkedAns.checked = false;
        }
    }

};

// For Scoring

var jsNext = () => {

    // For Checking
    jsScoreCounter();
    // For Checking

    jsQuestionIndex++;

    jsScoreSpan.innerText = JSscore;

    // For JS-quiz Score modal

    if (jsQuestionIndex === allJSQuestion.length) {

        quizScoreOverlay.style.display = "block";
        jsQuizScore.style.display = "flex";

        return;
    }

    // For JS-quiz Score modal

    // For Dynamic Question rander

    jsQuestion.innerHTML = allJSQuestion[jsQuestionIndex].question;

    allJSQuestion[jsQuestionIndex].options.forEach((value, index) => {
        jsOptions[index].innerText = value;
    });

    // For Dynamic Question rander

};

// For JS-quiz Score modal

var jsScoreClose = () => {

    quizScoreOverlay.style.display = "none";
    jsQuizScore.style.display = "none";

    location.reload();
}

// For JS-quiz Score modal

// For JS-quiz Question

// For Bootstrap-quiz Question

var allBootstrapQuestion = [
    {
        question: "What is Bootstrap primarily used for?",
        options: [
            "Adding interactivity to web pages",
            "Creating responsive layouts and design",
            "Connecting to a database",
            "Structuring web pages"
        ],
        correctAnswer: "Creating responsive layouts and design"
    },
    {
        question: "Which class is used to create a button in Bootstrap?",
        options: [
            "btn",
            "button",
            "btn-default",
            "btn-class"
        ],
        correctAnswer: "btn"
    },
    {
        question: "Which class provides a full-width container in Bootstrap?",
        options: [
            "container-fluid",
            "container",
            "container-full",
            "container-responsive"
        ],
        correctAnswer: "container-fluid"
    },
    {
        question: "How do you include Bootstrap in a project?",
        options: [
            "Linking the Bootstrap CSS file",
            "Linking the Bootstrap JavaScript file",
            "Using a CDN",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Which class is used to make an image responsive in Bootstrap?",
        options: [
            "img-responsive",
            "img-fluid",
            "image-responsive",
            "responsive-img"
        ],
        correctAnswer: "img-fluid"
    },
    {
        question: "What does the Bootstrap grid system use to create layouts?",
        options: [
            "Rows and columns",
            "Tables",
            "Div tags",
            "Flexbox only"
        ],
        correctAnswer: "Rows and columns"
    },
    {
        question: "Which class is used to create a navigation bar in Bootstrap?",
        options: [
            "navbar",
            "nav",
            "navigation-bar",
            "navbar-default"
        ],
        correctAnswer: "navbar"
    },
    {
        question: "How many columns are there in the Bootstrap grid system?",
        options: [
            "12",
            "8",
            "16",
            "10"
        ],
        correctAnswer: "12"
    },
    {
        question: "Which class is used to hide an element on all screen sizes in Bootstrap?",
        options: [
            "d-none",
            "hidden",
            "hide",
            "invisible"
        ],
        correctAnswer: "d-none"
    },
    {
        question: "What is the purpose of the 'dropdown-menu' class in Bootstrap?",
        options: [
            "To style navigation bars",
            "To create a drop-down menu",
            "To create a collapsible sidebar",
            "To add a search bar"
        ],
        correctAnswer: "To create a drop-down menu"
    }
];

var bootstrapQuestion = document.getElementById("bootstrap-question");

var bootstrapOptions = [
    document.getElementById("bootstrap-option-1"),
    document.getElementById("bootstrap-option-2"),
    document.getElementById("bootstrap-option-3"),
    document.getElementById("bootstrap-option-4")
];

var bootstrapQuestionIndex = 0;

var startBootstrapQuiz = () => {

    // To Show Modal

    bootstrapContainerOpen.style.top = "50%";
    overlay.style.width = "100%";

    // To Show Modal

    bootstrapQuestion.innerHTML = allBootstrapQuestion[bootstrapQuestionIndex].question;

    allBootstrapQuestion[bootstrapQuestionIndex].options.forEach((value, index) => {
        bootstrapOptions[index].innerText = value;
    })

};

// For Scoring

var bootstrapScoreSpan = document.getElementById("bootstrap-score");

var bootstrapQuizScore = document.getElementById("bootstrap-quiz-score");

var bootstrapScore = 0;

var bootstrapScoreCounter = () => {

    var checkedAns = document.querySelector("input[type='radio']:checked");

    if (checkedAns === null) {
        alert("Plase select one option");
        bootstrapQuestionIndex--;
    } else {
        if (checkedAns.nextElementSibling.innerText === allBootstrapQuestion[bootstrapQuestionIndex].correctAnswer) {
            bootstrapScore++;
            checkedAns.checked = false;
        } else {
            checkedAns.checked = false;
        }
    }

};

// For Scoring

var bootstrapNext = () => {

    // For Checking
    bootstrapScoreCounter();
    // For Checking

    console.log(bootstrapScore);

    bootstrapQuestionIndex++;

    bootstrapScoreSpan.innerText = bootstrapScore;
    console.log(bootstrapScoreSpan);

    // For bootstrap-quiz Score modal

    if (bootstrapQuestionIndex === allBootstrapQuestion.length) {

        quizScoreOverlay.style.display = "block";
        bootstrapQuizScore.style.display = "flex";

        return;
    }

    // For bootstrap-quiz Score modal

    // For Dynamic Question rander

    bootstrapQuestion.innerHTML = allBootstrapQuestion[bootstrapQuestionIndex].question;

    allBootstrapQuestion[bootstrapQuestionIndex].options.forEach((value, index) => {
        bootstrapOptions[index].innerText = value;
    });

    // For Dynamic Question rander

};

// For Bootstrap-quiz Score modal

var bootstrapScoreClose = () => {

    quizScoreOverlay.style.display = "none";
    bootstrapQuizScore.style.display = "none";

    location.reload();
}

// For Bootstrap-quiz Score modal

// For Bootstrap-quiz Question

