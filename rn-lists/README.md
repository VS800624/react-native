Dimensions.get("window") vs Dimensions.get("screen")

Both are used to get width and height, but they are not the same.

1️⃣ Dimensions.get("window")

👉 What it gives:
Only the usable area of the app

✅ Excludes:

Status bar (top bar)

Navigation bar (bottom buttons, on Android)

Example
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

console.log(window.width);
console.log(window.height);

Use when:

Designing UI

Making responsive layouts

Calculating card sizes, images, buttons

📌 Most commonly used

2️⃣ Dimensions.get("screen")

👉 What it gives:
The full device screen size

✅ Includes:

Status bar

Navigation bar

Everything on the device screen

Example
const screen = Dimensions.get("screen");

console.log(screen.width);
console.log(screen.height);

Use when:

Full-screen modals

Games

Custom animations

Measuring actual device size

🔍 Simple Difference Table
Feature	                        window	   screen
Includes status bar	            ❌ No	    ✅ Yes
Includes nav bar	               ❌ No	    ✅ Yes
Changes on rotation	            ✅ Yes	    ⚠️ Less reliable
Best for UI                   	✅ Yes	     ❌ No

window gives the usable app area, while screen gives the full device screen including system UI.