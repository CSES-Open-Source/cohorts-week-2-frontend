# Cohorts Week 2 : Frontend Basics (Counter App)

First, clone the project from Github:

```
git clone git@github.com:CSES-Open-Source/cohorts-week-2-frontend.git
```

# PREQUISITES

## Node.js and npm
---

## Install Node.js (Required for Vite)

Before starting, make sure you have **Node.js v18+** installed.
You can check by running:

```bash
node -v
```

If you see something like `v20.11.1`, you’re ready to continue.
If not, follow the steps below based on your operating system.

---

### macOS Example.

1. **Install Node with Homebrew (recommended)**

   ```bash
   brew install node
   ```

2. **Verify installation**

   ```bash
   node -v
   npm -v
   ```

   You should now see version numbers for both Node and npm.

3. **(Alternative)**
   If you don’t use Homebrew, you can also download Node directly:

   * Go to [https://nodejs.org](https://nodejs.org)
   * Choose **LTS** → macOS Installer (`.pkg`)
   * Follow the on-screen setup wizard

---

### Windows Example

1. **Install Node using the official installer**

   * Visit [https://nodejs.org](https://nodejs.org)
   * Download the **LTS** version (`.msi` file)
   * Run the installer
   * Keep the default options checked — especially **“Add to PATH”**

2. **Verify installation**
   Open a new Command Prompt and run:

   ```bash
   node -v
   npm -v
   ```

   You should see version numbers appear.

3. **(Optional for advanced users)**
   You can also install via [Chocolatey](https://chocolatey.org/install):

   ```bash
   choco install nodejs-lts
   ```

---

# PART 1: HTML/CSS/JS
---
## SETUP
### TODO 1: Create Project Folder
Create a new folder with your name under the root github directory. You can do this manually or by running the following command in your terminal:

``` 
user@user MINGW64 ~/path/to/github/root (main) 
$ mkdir your-name
```

## HTML

HTML creates the **structure** of your webpage, which is the skeleton.

---

### TODO 1: Add Page Title

```html
<title>Counter App</title>
```

**Where:** Inside `<head>`, after the `<meta>` tags

This text appears in the browser tab.

---

---

### TODO 2: Create Main Container

```html
<main class="container">
</main>
```

**Where:** Inside `<body>`

`<main>` = semantic tag for main content
`class="container"` = name for CSS to find and style it

---

### TODO 3: Add Heading

```html
<h1>Counter App</h1>
```

**Where:** Inside `<main class="container">`

`<h1>` is the largest heading tag.

---

### TODO 4: Add Count Display

```html
<p id="count">0</p>
```

**Where:** Inside `<main>`, after the `<h1>`

`<p>` = paragraph tag
`id="count"` = unique(id) name so JavaScript can find it

---

### TODO 5: Add Three Buttons

The first button is already done for you:

```html
<button id="decrement">-</button>
```

Now add the other two:

```html
<button id="reset">Reset</button>
<button id="increment">+</button>
```

**Where:** Inside `<main>`, after the `<p id="count">`

Each button needs a unique `id`
Text between tags is what users see (such as "Reset" or "+")

---

## CSS

CSS helps style your pages: colors, spacing, and layout.

CSS uses **selectors** to find and style HTML elements. There are three main ways:

#### **Tag Selector** - Styles ALL elements of that type

```css
button {
  font-size: 1.25rem;
}
```

- Every `<button>` on the page

#### **Class Selector** - Styles elements with that class (starts with `.`)

```css
.container {
  background: white;
}
```

- Any element with `class="container"`
- Example: `<main class="container">` gets white background

#### **ID Selector** - Styles ONE specific element (starts with `#`)

```css
#count {
  font-size: 3rem;
}
```

- Targets: The element with `id="count"`
- Each ID should be used **ONLY ONCE** per page
- Example: Only `<p id="count">` gets large font

CSS uses different units to measure size and space:

#### **px (pixels)** - Fixed size

- `10px` = exactly 10 pixels on screen
- Never changes, always the same size
- Example: `width: 250px` → always 250 pixels wide

#### **rem (relative unit)** - Flexible size

- Based on root font size (usually 16px)
- `1rem` = 16px (default)
- `2rem` = 32px (2 × 16)
- `0.5rem` = 8px (0.5 × 16)

**When to use what:**

- Use `px` for exact sizes (width, borders)
- Use `rem` for spacing and fonts (more flexible)

---

### Understanding Margin, Padding, and Background

#### Visual Guide:

```

+---------------------------------------+
|             MARGIN                    |
|  +---------------------------------+  |
|  |           BORDER                |  |
|  |  +---------------------------+  |  |
|  |  |        PADDING            |  |  |
|  |  |   +-------------------+   |  |  |
|  |  |   |     CONTENT       |   |  |  |
|  |  |   +-------------------+   |  |  |
|  |  +---------------------------+  |  |
|  +---------------------------------+  |
+---------------------------------------+


```

#### **margin** - Space OUTSIDE the element

- Pushes other elements away
- `margin: 1rem;` = 1rem space on all sides
- `margin: 1rem 0;` = 1rem top/bottom, 0 left/right

#### **padding** - Space INSIDE the element

- Pushes content away from edges
- `padding: 2rem;` = 2rem space inside all sides
- `padding: 0.5rem 1rem;` = 0.5rem top/bottom, 1rem left/right

---

### TODO 6: Link CSS File

```html
<link rel="stylesheet" href="style.css" />
```

**Where:** Inside `<head>`, after the `<title>`

This connects your CSS file to style the page.

### TODO 7: Style the Container

```css
.container {
  background: white;
  padding: 2rem;
  width: 250px;
  text-align: center;
}
```

**What each property does:**

- `background: white;` → White box
- `padding: 2rem;` → 32px space inside
- `width: 250px;` → Box is exactly 250 pixels wide
- `text-align: center;` → Centers text inside

---

### TODO 8: Style the Count Display

```css
#count {
  font-size: 3rem;
  margin: 1rem 0;
}
```

**What each property does:**

- `font-size: 3rem;` → 48px
- `margin: 1rem 0;` → Adds space above and below the number (top/bottom/left/right)
  - `1rem` = 16px top/bottom margin
  - `0` = no left/right margin

---

### TODO 9: Style the Buttons

```css
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border: none;
}
```

**What each property does:**

- `margin: 0.5rem;` → 8px space around each button (separates them)
- `padding: 0.5rem 1rem;` → Space inside button
  - `0.5rem` (8px) = top and bottom padding
  - `1rem` (16px) = left and right padding
- `border: none;` → Removes default button border

---

### BONUS TODO 1: Green Increment Button

```css
#increment {
  background-color: green;
}
```

- `#increment` → Targets only the + button
- `background-color: green;` → Green background

---

### BONUS TODO 2: Hover Effect

```css
button:hover {
  background: #e2e8f0;
}
```

- `button:hover` → Applies when mouse is over button
- `background: #e2e8f0;` → Light gray color

---

## JavaScript

JavaScript makes your page **interactive**: responds to clicks and updates content.

### TODO 10: Add Script Tag

```html
<script src="script.js"></script>
```

**Where:** At the very end of `<body>`, before `</body>`

This loads your JavaScript file to make buttons work.

---
### TODO 11: Get Elements

```javascript
const countDisplay = document.getElementById("count");
```

- `document.getElementById("count")` → Finds `<p id="count">` in HTML
- `const` = constant variable (cannot be reassigned)

```javascript
function updateDisplay() {
  countDisplay.textContent = count;
}
```
- textContent is a property on DOM elements that gets/sets the element's text
  (in this case , it is document.getElementById('count'))
- It treats the value as plain text

```javascript
const incrementBtn = document.getElementById("INSERT CORRECT ID HERE");
```
- Similar to the above example, find the id for the increment button in index.html

```javascript
const decrementBtn =  // INSERT CORRECT FUNCTION HERE
```
- Moving a step further, create the function line to get the decrement button's id

```javascript
// CREATE A NEW resetBtn const here
```
- Now for the final step, create a whole new const for the reset button, similar to above

---
### TODO 12: Increment Button

```javascript
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});
```

- `addEventListener("click", ...)` → Wait for button click
- `count++` → Increase by 1 (shorthand for `count = count + 1`)

---

### TODO 13: Decrement Button

```javascript
decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});
```

- `count--` → Decrease by 1 (shorthand for `count = count - 1`)

---

### TODO 14: Reset Button

```javascript
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
```
---

# PART 2: VITE + REACT
---
## SETUP
### TODO 1: Create Vite Project
Navigate to the folder you created earlier with your name. Then run the following command in your terminal:

```
npm create vite@latest part2 -- --template react-ts
```
This will create a new Vite project with React and TypeScript in a folder named `part2`.

Move into the folder and install dependencies:
```
cd part2
npm install
```

You should now see a structure like this:
```
part2/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src/
   ├─ App.css
   ├─ App.tsx
   ├─ index.css
   └─ main.tsx
```
---
### TODO 2: Replace Default Files
This might be overwhelming at first, but don't worry! We'll guide you through replacing the default files so that it's more manageable.

We’ll now copy over your prepared files from
root/template/part2/ into the new Vite project.

Make sure you’re still inside root/your-name/part2/, then run:
```
cp ../../template/part2/App.tsx src/
cp ../../template/part2/App.css src/
cp ../../template/part2/index.css src/
```
---
### TODO 3: Start Development Server
Now, start the Vite development server by running:
```
npm run dev
```

You should see something like:
```
VITE v5.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

Open the link in your browser — you’ll see your migrated app running.
---
## REACT
Got it — here’s your cleaned-up **Part 2** section starting directly from copying the main class (skipping setup and file replacement).
The structure matches your README style exactly and continues the same `### TODO #` format seamlessly.

---

# PART 2: VITE + REACT

---

### TODO 1: Copy Your Main Class from Part 1

Open `src/App.tsx`. You’ll see a file with several TODO comments.

Replace the empty `return()` block with the HTML structure from **Part 1**.

Make sure to:

* Paste everything inside the `<>` and `</>` fragment tags
* Replace `class` with `className` (React uses `className` for CSS)

```tsx
<>
  <main className="container">
    <h1>Counter App</h1>
    <p id="count">0</p>
    <div className="buttons">
      <button id="decrement">-</button>
      <button id="reset">Reset</button>
      <button id="increment">+</button>
    </div>
  </main>
</>
```

At this point, your app should look like the same static counter page from Part 1 — but it won’t respond to clicks yet.

---

### TODO 2: Import `useState` from React

At the top of `App.tsx`, import the React hook that lets you store and update variables.

```tsx
import { useState } from "react";
import "./App.css";
```

**Explanation:**

* `useState` allows your React component to “remember” values between renders.
* When the value changes, React automatically updates what’s displayed on the screen.

---

### TODO 3: Add `count` and `setCount` Variable Using `useState`

Inside the `App()` function, right under the opening brace, add this line:

```tsx
const [count, setCount] = useState(0);
```

**Explanation:**

* `count` → the current number on screen.
* `setCount()` → the function that updates it.
* `useState(0)` sets the initial value to 0.

---

### TODO 4: Display the Count Dynamically

Change the static `0` inside your `<p>` tag to `{count}` so React can display the live value.

```tsx
<p id="count">{count}</p>
```

**Explanation:**

* The curly braces let you embed JavaScript values inside HTML-like JSX.
* Whenever `setCount()` is called, React re-renders and shows the new value automatically.

---

### TODO 5: Add onClick Tag to Increment

Make the **“+”** button increase the count each time it’s clicked.

```tsx
<button id="increment" onClick={() => setCount(count + 1)}>+</button>
```

**Explanation:**

* `onClick` runs the function whenever the button is clicked.
* `setCount(count + 1)` tells React to increase the counter by 1 and re-render.

---

### TODO 6: Add onClick Tag to Reset

Make the **Reset** button set the counter back to 0.

```tsx
<button id="reset" onClick={() => setCount(0)}>Reset</button>
```

---

### TODO 7: Add onClick Tag to Decrement

Make the **“−”** button decrease the count each time it’s clicked.

```tsx
<button id="decrement" onClick={() => setCount(count - 1)}>-</button>
```

---

# CONGRATS!
You’ve successfully converted your Counter App to use Vite and React!



