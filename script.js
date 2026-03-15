// DOM

const HeaderHeight = document.getElementById("Header").offsetHeight;
const CreateAccountPage = document.getElementById("CreateAccountPage");
const LoginBtn = document.getElementById("LoginBtn");
const CreateAccountBtn = document.getElementById("CreateAccountBtn");
const CreateAccountForm = document.getElementById("CreateAccountForm");
const CreateAccountImage = document.getElementById("CreateAccountImage");
const Wel = document.getElementById("Welcome");
const Log = document.getElementById("log");
const ForgetPassword = document.getElementById("ForgotPassword");
const CreateBtnHeader = document.getElementById("CreateAccountBtnHeader");
const LoginBtnHeader = document.getElementById("LoginBtnHeader");
const PasswordForgotStatment = document.getElementById(
	"PasswordForgotStatment",
);
const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const EmailError = document.getElementById("EmailError");
const Eye = document.getElementById("Eye");
const Cursor = document.getElementById("Cursor");
const PasswordList = document.getElementById("PasswordList");
const PasswordNumber = document.getElementById("PasswordNumbers");
const PasswordUppercase = document.getElementById("PasswordUppercase");
const PasswordSymbols = document.getElementById("PasswordSymbols");
const Login = document.getElementById("login");
const TextMenu = document.getElementById("TextMenu");
const Copy = document.getElementById("Copy");
const Paste = document.getElementById("Paste");
const Cut = document.getElementById("Cut");

// Style

CreateAccountPage.style.height = `calc(100vh - ${HeaderHeight}px)`;

// Change bet. two Tabs

if (window.innerWidth > 750) {
	LoginBtn.onclick = () => {
		CreateAccountForm.style.transform = "translateX(50vw)";
		CreateAccountImage.style.transform = "translateX(-50vw)";
		ForgetPassword.classList.remove("hidden");
		Wel.innerHTML = "Welcome Back";
		Log.innerHTML = "LogIn";
		EmailInput.value = "";
		PasswordInput.value = "";
		LoginBtn.classList.add("hidden");
		setTimeout(() => {
			CreateAccountBtn.classList.remove("hidden");
		}, 400);
	};
} else {
	LoginBtnHeader.onclick = () => {
		Wel.innerHTML = "Welcome Back";
		Log.innerHTML = "LogIn";
		EmailInput.value = "";
		PasswordInput.value = "";
		ForgetPassword.classList.remove("hidden");
		LoginBtnHeader.classList.add("hidden");
		CreateBtnHeader.classList.remove("hidden");
	};
}

if (window.innerWidth > 750) {
	CreateAccountBtn.onclick = () => {
		CreateAccountForm.style.transform = "translateX(0vw)";
		CreateAccountImage.style.transform = "translateX(0vw)";
		Wel.innerHTML = "Welcome";
		Log.innerHTML = "Create Account";
		EmailInput.value = "";
		PasswordInput.value = "";
		ForgetPassword.classList.add("hidden");
		CreateAccountBtn.classList.add("hidden");
		setTimeout(() => {
			LoginBtn.classList.remove("hidden");
		}, 400);
	};
} else {
	CreateBtnHeader.onclick = () => {
		Wel.innerHTML = "Welcome";
		Log.innerHTML = "Create Account";
		EmailInput.value = "";
		PasswordInput.value = "";
		ForgetPassword.classList.add("hidden");
		LoginBtnHeader.classList.remove("hidden");
		CreateBtnHeader.classList.add("hidden");
	};
}

// Forgot Password

ForgetPassword.onclick = () => {
	PasswordForgotStatment.classList.remove("hidden");
	setTimeout(() => {
		PasswordForgotStatment.classList.add("hidden");
	}, 1000);
};

// Validation
// Email

let EmailValidation = "";

EmailInput.onblur = () => {
	EmailValidation = false;
	const Email = document.getElementById("EmailInput").value.split("").reverse();
	const Validate = Email.splice(0, 10).reverse().join("").replaceAll(",", "");
	if (Validate === "@gmail.com") {
		EmailValidation = true;
		EmailError.classList.add("hidden");
	} else {
		EmailError.classList.remove("hidden");
		console.log("gmail.com");
	}
	Email.forEach((x) => {
		if (x === " ") {
			EmailValidation = false;
			console.log("Spaces");
		}
	});
};

// Validate Password

let PasswordValidation = false;
const Password = [];
let LetterAdded = "";
let Interval = null;

PasswordInput.onfocus = () => {
	clearInterval(Interval);
	PasswordList.classList.remove("hidden");
	Interval = setInterval(() => {
		LetterAdded = PasswordInput.value.slice(-1);
		LetterAdded.length === 0 || LetterAdded === "~"
			? ""
			: Password.push(LetterAdded);
		if (typeof LetterAdded === "number") {
			PasswordNumber.classList.remove("text-red-600");
			PasswordNumber.classList.add("text-green-600");
		} else if (LetterAdded.toLowerCase() !== LetterAdded) {
			PasswordUppercase.classList.remove("text-red-600");
			PasswordUppercase.classList.add("text-green-600");
		} else if (
			LetterAdded === "~" ||
			LetterAdded === "!" ||
			LetterAdded === "@" ||
			LetterAdded === "#" ||
			LetterAdded === "$" ||
			LetterAdded === "%" ||
			LetterAdded === "^" ||
			LetterAdded === "&" ||
			LetterAdded === "*" ||
			LetterAdded === "(" ||
			LetterAdded === ")" ||
			LetterAdded === "-" ||
			LetterAdded === "+" ||
			LetterAdded === "="
		) {
			PasswordSymbols.classList.remove("text-red-600");
			PasswordSymbols.classList.add("text-green-600");
		}
		LetterAdded = "";
		const Length = PasswordInput.value.length;
		let PasswordEncrypted = "";
		for (let i = 0; i < Length; i++) {
			PasswordEncrypted += "~";
		}
		PasswordInput.value = PasswordEncrypted;
	}, 10);
};

Eye.onmouseenter = () => {
	PasswordInput.value = Password.join("");
};

Eye.onmouseleave = () => {
	PasswordInput.value = Password.map(() => "~").join("");
};

let NumberValidate = "";
let UppercaseValidate = "";
let SymbolsValidate = "";

PasswordInput.onblur = () => {
	NumberValidate = false;
	UppercaseValidate = false;
	SymbolsValidate = false;
	clearInterval(Interval);
	Password.forEach((x) => {
		// Numbers
		if (typeof Number(x) === "number") {
			NumberValidate = true;
		}
		// Symbols
		if (x.toLowerCase() !== x) {
			UppercaseValidate = true;
		}
		// Symbols
		if (
			x === "~" ||
			x === "!" ||
			x === "@" ||
			x === "#" ||
			x === "$" ||
			x === "%" ||
			x === "^" ||
			x === "&" ||
			x === "*" ||
			x === "(" ||
			x === ")" ||
			x === "-" ||
			x === "+" ||
			x === "="
		) {
			SymbolsValidate = true;
		}
	});
	if (NumberValidate === true) {
		PasswordNumber.classList.remove("text-red-600");
		PasswordNumber.classList.add("text-green-600");
	}
	if (UppercaseValidate === true) {
		PasswordUppercase.classList.remove("text-red-600");
		PasswordUppercase.classList.add("text-green-600");
	}
	if (SymbolsValidate === true) {
		PasswordSymbols.classList.remove("text-red-600");
		PasswordSymbols.classList.add("text-green-600");
	}
	if (
		NumberValidate === true &&
		SymbolsValidate === true &&
		UppercaseValidate === true
	) {
		PasswordValidation = true;
		console.log("Valid Password");
	}
};
const Interval1 = setInterval(() => {
	if (EmailValidation === true && PasswordValidation === true) {
		clearInterval(Interval1);
		Login.disabled = false;
	}
}, 100);

Login.onclick = () => {
	window.location.href = "https://www.google.com";
};

// Cursor

document.addEventListener("mousemove", (e) => {
	Cursor.style.left = `${e.clientX}px`;
	Cursor.style.top = `${e.clientY}px`;
});
document.addEventListener("mouseleave", () => {
	Cursor.style.display = "none";
});

document.addEventListener("mouseenter", () => {
	Cursor.style.display = "block";
});

// OnTextMenu

const UpdateMenuPosition = (x, y) => {
	const Width = window.innerWidth - TextMenu.offsetWidth;
	const Heigth = window.innerHeight - TextMenu.offsetHeight;

	TextMenu.style.left = `${Math.min(Width, x)}px`;
	TextMenu.style.top = `${Math.min(Heigth, y)}px`;
};

window.oncontextmenu = (e) => {
	e.preventDefault();
	UpdateMenuPosition(e.clientX, e.clientY);
	TextMenu.classList.remove("hidden");
};
window.onclick = () => {
	TextMenu.classList.add("hidden");
};

if (window.innerWidth > 1000) {
	const style = document.createElement("style");
	style.innerHTML = `
  * {
    cursor: none;
  }
`;
	document.head.appendChild(style);
}
