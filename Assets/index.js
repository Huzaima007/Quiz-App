//! For Quiz-app

var overlay = document.getElementById("overlay");

// For html quiz modal

// For html all question array

var htmlQuestions = [
    {
        question: "Qno1: What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTransfer Markup Language",
            "None of the above"
        ],
        answer: "HyperText Markup Language"
    },
    {
        question: "Qno2: Which HTML element is used for the largest heading?",
        options: ["<heading>", "<h1>", "<h6>", "<head>"],
        answer: "<h1>"
    },
    {
        question: "Qno3: What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<line>"],
        answer: "<br>"
    },
    {
        question: "Qno4: Which of these is a valid way to add a comment in HTML?",
        options: [
            "<!-- This is a comment -->",
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment"
        ],
        answer: "<!-- This is a comment -->"
    },
    {
        question: "Qno5: Which attribute specifies the destination of a hyperlink?",
        options: ["src", "link", "href", "target"],
        answer: "href"
    },
    {
        question: "Qno6: What is the purpose of the <alt> attribute in <img> tags?",
        options: [
            "To define alternate text for an image",
            "To set the image's alignment",
            "To specify an alternate image URL",
            "To define the image's aspect ratio"
        ],
        answer: "To define alternate text for an image"
    },
    {
        question: "Qno7: Which element is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "Qno8: Which HTML element is used to define a table row?",
        options: ["<th>", "<tr>", "<td>", "<row>"],
        answer: "<tr>"
    },
    {
        question: "Qno9: What is the correct way to link an external CSS file?",
        options: [
            "<link rel='stylesheet' href='style.css'>",
            "<style src='style.css'>",
            "<css href='style.css'>",
            "<stylesheet link='style.css'>"
        ],
        answer: "<link rel='stylesheet' href='style.css'>"
    },
    {
        question: "Qno10: Which HTML element is used to play video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        answer: "<video>"
    }
];

// For html all question array

var htmlModal = document.getElementById("html-quiz-modal");

var htmlQuestion = document.getElementById("html-question");

var htmlOptions = document.querySelectorAll(".html-ans");

var htmlQuizScore = document.getElementById("html-quiz-score");

var quizScoreOverlay = document.querySelector(".quiz-score-overlay");

var htmlScoreSpan = document.getElementById("html-score");

var htmlScore = 0;

var htmlQuestionIndex = 0;

var startHtmlQuiz = () => {

    htmlModal.style.top = "50%";
    overlay.style.width = "100%";

    // For html quiz question

    htmlQuestion.innerText = htmlQuestions[htmlQuestionIndex].question;

    // For html quiz question

    // For html quiz options

    htmlOptions.forEach((option, index) => {
        option.innerText = htmlQuestions[htmlQuestionIndex].options[index];
    });

    // For html quiz options

}

var closeHtmlQuiz = () => {
    htmlModal.style.top = "-50%";
    overlay.style.width = "0%";
}

// For html score checking

let htmlOption = (userInput) => {

    let userSelect = userInput.innerText;
    let correctAnswer = htmlQuestions[htmlQuestionIndex].answer;

    if (userSelect === correctAnswer) {
        userInput.classList.add("correct");
        htmlScore++;
    } else {
        userInput.classList.add("incorrect");
    }

    htmlOptions.forEach((element) => {
        if (element.innerText === correctAnswer) {
            element.classList.add("correct");
        }

        element.style.pointerEvents = "none";
    });
};


// For html score checking

// For html quiz next question and options


const htmlNext = () => {

    htmlScoreSpan.innerText = htmlScore;

    htmlQuestionIndex++;

    // For Checking Score
    if (htmlQuestionIndex === htmlQuestions.length) {

        htmlQuizScore.style.top = "50%";
        quizScoreOverlay.style.height = "100vh";

        return;
    }

    // Update question and options
    htmlQuestion.innerText = htmlQuestions[htmlQuestionIndex].question;

    htmlOptions.forEach((option, index) => {
        option.innerText = htmlQuestions[htmlQuestionIndex].options[index];
        option.classList.remove("correct");
        option.classList.remove("incorrect");
        option.style.pointerEvents = "";
    });
};

// For html quiz next question and options

// For html score close

var htmlScoreClose = () => {
    location.reload();
}

// For html score close

// For html quiz next

var closeHtmlQuiz = () => {
    htmlModal.style.top = "-50%";
    overlay.style.width = "0%";
}

// For html quiz modal

// For html quiz modal

// For css all question array

var cssQuestions = [
    {
        question: "Qno1: What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Qno2: Which property is used to change the background color?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: "Qno3: Which CSS property controls the text size?",
        options: ["font-size", "text-style", "text-size", "font-style"],
        answer: "font-size"
    },
    {
        question: "Qno4: How do you add a comment in CSS?",
        options: [
            "/* This is a comment */",
            "// This is a comment",
            "<!-- This is a comment -->",
            "# This is a comment"
        ],
        answer: "/* This is a comment */"
    },
    {
        question: "Qno5: Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-weight", "font"],
        answer: "font-family"
    },
    {
        question: "Qno6: How do you make a list that lists its items with squares?",
        options: ["list-type: square;", "list-style: square;", "list-style-type: square;", "list-shape: square;"],
        answer: "list-style-type: square;"
    },
    {
        question: "Qno7: Which property is used to make the text bold?",
        options: ["font-weight", "font-style", "text-transform", "font-family"],
        answer: "font-weight"
    },
    {
        question: "Qno8: How do you select an element with id 'example'?",
        options: ["#example", ".example", "example", "id-example"],
        answer: "#example"
    },
    {
        question: "Qno9: Which CSS property is used to create space between the element's border and content?",
        options: ["padding", "margin", "border-spacing", "spacing"],
        answer: "padding"
    },
    {
        question: "Qno10: Which property is used to specify the stack order of elements?",
        options: ["z-index", "position", "stack-order", "display"],
        answer: "z-index"
    }
];


// For css all question array

var cssModal = document.getElementById("css-quiz-modal");

var cssQuestion = document.getElementById("css-question");

var cssOptions = document.querySelectorAll(".css-ans");

var cssQuizScore = document.getElementById("css-quiz-score");

var quizScoreOverlay = document.querySelector(".quiz-score-overlay");

var cssScoreSpan = document.getElementById("css-score");

var cssScore = 0;

var cssQuestionIndex = 0;

var startCssQuiz = () => {

    cssModal.style.top = "50%";
    overlay.style.width = "100%";

    // For html quiz question

    cssQuestion.innerText = cssQuestions[cssQuestionIndex].question;

    // For css quiz question

    // For css quiz options

    cssOptions.forEach((option, index) => {
        option.innerText = cssQuestions[cssQuestionIndex].options[index];
    });

    // For css quiz options

}

// For css score checking

let cssOption = (userInput) => {

    let userSelect = userInput.innerText;
    let correctAnswer = cssQuestions[cssQuestionIndex].answer;

    if (userSelect === correctAnswer) {
        userInput.classList.add("correct");
        cssScore++;
    } else {
        userInput.classList.add("incorrect");
    }

    cssOptions.forEach((element) => {
        if (element.innerText === correctAnswer) {
            element.classList.add("correct");
        }

        element.style.pointerEvents = "none";
    });
};

// For css score checking

// For css quiz next question and options


const cssNext = () => {

    cssScoreSpan.innerText = cssScore;

    cssQuestionIndex++;

    // For Checking Score
    if (cssQuestionIndex === cssQuestions.length) {

        cssQuizScore.style.top = "50%";
        quizScoreOverlay.style.height = "100vh";

        return;
    }

    // Update question and options
    cssQuestion.innerText = cssQuestions[cssQuestionIndex].question;

    cssOptions.forEach((option, index) => {
        option.innerText = cssQuestions[cssQuestionIndex].options[index];
        option.classList.remove("correct");
        option.classList.remove("incorrect");
        option.style.pointerEvents = "";
    });
};


// For css quiz next question and options

// For css score close

var cssScoreClose = () => {
    location.reload();
}

// For css score close

// For css quiz next

var closeCssQuiz = () => {
    cssModal.style.top = "-50%";
    overlay.style.width = "0%";
}

// For css quiz modal

// For js all question array

var jsQuestions = [
    {
        question: "Qno1: What is JavaScript used for?",
        options: [
            "Styling web pages",
            "Adding interactivity to web pages",
            "Structuring web content",
            "Managing databases"
        ],
        answer: "Adding interactivity to web pages"
    },
    {
        question: "Qno2: Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Qno3: What is the correct way to write 'Hello, World!' in an alert box?",
        options: [
            "alertBox('Hello, World!');",
            "alert('Hello, World!');",
            "msg('Hello, World!');",
            "msgBox('Hello, World!');"
        ],
        answer: "alert('Hello, World!');"
    },
    {
        question: "Qno4: How do you create a function in JavaScript?",
        options: [
            "function myFunction() {}",
            "def myFunction() {}",
            "create myFunction() {}",
            "func myFunction() {}"
        ],
        answer: "function myFunction() {}"
    },
    {
        question: "Qno5: Which of these is a correct way to call a function named 'myFunction'?",
        options: ["call myFunction();", "myFunction();", "run myFunction();", "execute myFunction();"],
        answer: "myFunction();"
    },
    {
        question: "Qno6: Which symbol is used to end a statement in JavaScript?",
        options: [".", ",", ";", ":"],
        answer: ";"
    },
    {
        question: "Qno7: What will 'console.log(2 + 3);' output?",
        options: ["5", "23", "undefined", "Error"],
        answer: "5"
    },
    {
        question: "Qno8: How do you write a conditional statement in JavaScript?",
        options: [
            "if (condition) {}",
            "if condition {}",
            "if: condition {}",
            "if => condition {}"
        ],
        answer: "if (condition) {}"
    },
    {
        question: "Qno9: What does 'console.log' do in JavaScript?",
        options: [
            "Outputs messages to the browser's console",
            "Displays alerts on the screen",
            "Logs data into a file",
            "Starts a debugging session"
        ],
        answer: "Outputs messages to the browser's console"
    },
    {
        question: "Qno10: Which of these is a valid way to declare an array in JavaScript?",
        options: [
            "var colors = ['red', 'green', 'blue'];",
            "var colors = {red, green, blue};",
            "var colors = ('red', 'green', 'blue');",
            "var colors = 'red, green, blue';"
        ],
        answer: "var colors = ['red', 'green', 'blue'];"
    }
];

// For js all question array

var jsModal = document.getElementById("js-quiz-modal");

var jsQuestion = document.getElementById("js-question");

var jsOptions = document.querySelectorAll(".js-ans");

var jsQuizScore = document.getElementById("js-quiz-score");

var quizScoreOverlay = document.querySelector(".quiz-score-overlay");

var jsScoreSpan = document.getElementById("js-score");

var jsScore = 0;

var jsQuestionIndex = 0;

var startJSQuiz = () => {

    jsModal.style.top = "50%";
    overlay.style.width = "100%";

    // For js quiz question

    jsQuestion.innerText = jsQuestions[jsQuestionIndex].question;

    // For js quiz question

    // For js quiz options

    jsOptions.forEach((option, index) => {
        option.innerText = jsQuestions[jsQuestionIndex].options[index];
    });

    // For js quiz options

}

// For js score checking

let jsOption = (userInput) => {

    let userSelect = userInput.innerText;
    let correctAnswer = jsQuestions[jsQuestionIndex].answer;

    if (userSelect === correctAnswer) {
        userInput.classList.add("correct");
        jsScore++;
    } else {
        userInput.classList.add("incorrect");
    }

    jsOptions.forEach((element) => {
        if (element.innerText === correctAnswer) {
            element.classList.add("correct");
        }

        element.style.pointerEvents = "none";
    });
};


// For js score checking

// For js quiz next question and options

const jsNext = () => {

    jsScoreSpan.innerText = jsScore;

    jsQuestionIndex++;

    // For Checking Score
    if (jsQuestionIndex === jsQuestions.length) {

        jsQuizScore.style.top = "50%";
        quizScoreOverlay.style.height = "100vh";

        return;
    }

    // Update question and options
    jsQuestion.innerText = jsQuestions[jsQuestionIndex].question;

    jsOptions.forEach((option, index) => {
        option.innerText = jsQuestions[jsQuestionIndex].options[index];
        option.classList.remove("correct");
        option.classList.remove("incorrect");
        option.style.pointerEvents = "";
    });
};


// For js quiz next question and options

// For js score close

var jsScoreClose = () => {
    location.reload();
}

// For js score close

// For JS quiz next

var closeJSQuiz = () => {
    jsModal.style.top = "-50%";
    overlay.style.width = "0%";
}

// For JS quiz modal

// For js all question array

var bootstrapQuestions = [
    {
        question: "Qno1: What is Bootstrap used for?",
        options: [
            "Styling web pages",
            "Creating responsive layouts",
            "Adding JavaScript interactivity",
            "Managing databases"
        ],
        answer: "Creating responsive layouts"
    },
    {
        question: "Qno2: Which class is used to create a container with fixed width in Bootstrap?",
        options: [".container", ".container-fluid", ".container-fixed", ".container-sm"],
        answer: ".container"
    },
    {
        question: "Qno3: How do you include Bootstrap in a project?",
        options: [
            "By linking to the Bootstrap CDN",
            "By downloading the Bootstrap files",
            "By installing via npm",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Qno4: Which Bootstrap class is used to create a button?",
        options: [".btn", ".button", ".btn-class", ".button-class"],
        answer: ".btn"
    },
    {
        question: "Qno5: Which class is used to create a responsive table in Bootstrap?",
        options: [".table-responsive", ".responsive-table", ".table", ".table-fluid"],
        answer: ".table-responsive"
    },
    {
        question: "Qno6: What does the 'col' class in Bootstrap specify?",
        options: [
            "Column width in a grid layout",
            "Padding of a column",
            "Border of a column",
            "Height of a column"
        ],
        answer: "Column width in a grid layout"
    },
    {
        question: "Qno7: Which class is used to align text to the center in Bootstrap?",
        options: [".text-align-center", ".text-center", ".align-center", ".center-text"],
        answer: ".text-center"
    },
    {
        question: "Qno8: Which Bootstrap class is used to make an image responsive?",
        options: [".img-responsive", ".responsive-img", ".img-fluid", ".fluid-img"],
        answer: ".img-fluid"
    },
    {
        question: "Qno9: What is the default grid system in Bootstrap based on?",
        options: ["12 columns", "6 columns", "9 columns", "16 columns"],
        answer: "12 columns"
    },
    {
        question: "Qno10: Which class in Bootstrap is used to add a navigation bar?",
        options: [".navbar", ".nav-bar", ".navigation-bar", ".nav"],
        answer: ".navbar"
    }
];


// For bootstrap all question array

var bootstrapModal = document.getElementById("bootstrap-quiz-modal");

var bootstrapQuestion = document.getElementById("bootstrap-question");

var bootstrapOptions = document.querySelectorAll(".bootstrap-ans");

var bootstrapQuizScore = document.getElementById("bootstrap-quiz-score");

var quizScoreOverlay = document.querySelector(".quiz-score-overlay");

var bootstrapScoreSpan = document.getElementById("bootstrap-score");

var bootstrapScore = 0;

var bootstrapQuestionIndex = 0;

var startBootstrapQuiz = () => {

    bootstrapModal.style.top = "50%";
    overlay.style.width = "100%";

    // For js quiz question

    bootstrapQuestion.innerText = bootstrapQuestions[bootstrapQuestionIndex].question;

    // For bootstrap quiz question

    // For bootstrap quiz options

    bootstrapOptions.forEach((option, index) => {
        option.innerText = bootstrapQuestions[bootstrapQuestionIndex].options[index];
    });

    // For bootstrap quiz options

}

// For bootstrap score checking

let bootstrapOption = (userInput) => {

    let userSelect = userInput.innerText;
    let correctAnswer = bootstrapQuestions[bootstrapQuestionIndex].answer;

    if (userSelect === correctAnswer) {
        userInput.classList.add("correct");
        bootstrapScore++;
    } else {
        userInput.classList.add("incorrect");
    }

    bootstrapOptions.forEach((element) => {
        if (element.innerText === correctAnswer) {
            element.classList.add("correct");
        }

        element.style.pointerEvents = "none";
    });
};

// For bootstrap score checking

// For bootstrap quiz next question and options

const bootstrapNext = () => {

    bootstrapScoreSpan.innerText = bootstrapScore;

    bootstrapQuestionIndex++;

    // For Checking Score
    if (bootstrapQuestionIndex === bootstrapQuestions.length) {

        bootstrapQuizScore.style.top = "50%";
        quizScoreOverlay.style.height = "100vh";

        return;
    }

    // Update question and options
    bootstrapQuestion.innerText = bootstrapQuestions[bootstrapQuestionIndex].question;

    bootstrapOptions.forEach((option, index) => {
        option.innerText = bootstrapQuestions[bootstrapQuestionIndex].options[index];
        option.classList.remove("correct");
        option.classList.remove("incorrect");
        option.style.pointerEvents = "";
    });
};


// For bootstrap quiz next question and options

// For bootstrap score close

var bootstrapScoreClose = () => {
    location.reload();
}

// For bootstrap score close

// For Bootstrap quiz next

var closeBootstrapQuiz = () => {
    bootstrapModal.style.top = "-50%";
    overlay.style.width = "0%";
}

// For Bootstrap quiz modal



//! For Quiz-app