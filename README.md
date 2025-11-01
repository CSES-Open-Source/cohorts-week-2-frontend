# Counter App - 30 Minute Tutorial

---

## HTML

### What is HTML?
HTML creates the **structure** of your webpage, which is the skeleton.

---

### TODO 1: Add Page Title
```html
<title>Counter App</title>
```
**Where:** Inside `<head>`, after the `<meta>` tags

This text appears in the browser tab.

---

### TODO 2: Link CSS File
```html
<link rel="stylesheet" href="style.css" />
```
**Where:** Inside `<head>`, after the `<title>`

This connects your CSS file to style the page.

---

### TODO 3: Create Main Container
```html
<main class="container">
</main>
```
**Where:** Inside `<body>`

`<main>` = semantic tag for main content
`class="container"` = name for CSS to find and style it

---

### TODO 4: Add Heading
```html
<h1>Counter App</h1>
```
**Where:** Inside `<main class="container">`

`<h1>` is the largest heading tag.

---

### TODO 5: Add Count Display
```html
<p id="count">0</p>
```
**Where:** Inside `<main>`, after the `<h1>`

`<p>` = paragraph tag
`id="count"` = unique(id) name so JavaScript can find it

---

### TODO 6: Add Three Buttons
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

### TODO 7: Add Script Tag
```html
<script src="script.js"></script>
```
**Where:** At the very end of `<body>`, before `</body>`

This loads your JavaScript file to make buttons work.

---

## CSS

### What is CSS?
CSS helps style your pages: colors, spacing, and layout.

---

### Understanding CSS Units (px vs rem)

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
- Scales better on different devices

**Quick conversion:**
- `1rem` ≈ 16px
- `2rem` ≈ 32px
- `3rem` ≈ 48px
- `0.5rem` ≈ 8px

**When to use what:**
- Use `px` for exact sizes (width, borders)
- Use `rem` for spacing and fonts (more flexible)

---

### Understanding Margin, Padding, and Background

#### Visual Guide:
```
Other elements
     ↓
┌─────────── MARGIN (space outside) ────────────┐
│                                               │
│  ┌─────── PADDING (space inside) ─────────-┐  │
│  │                                         │  │
│  │  ┌─── BACKGROUND COLOR ───┐             │  │
│  │  │                        │             │  │
│  │  │      CONTENT           │             │  │
│  │  │      (text/images)     │             │  │
│  │  │                        │             │  │
│  │  └────────────────────────┘             │  │
│  │                                         │  │
│  └─────────────────────────────────────────┘  │
│                                               │
└───────────────────────────────────────────────┘
     ↑
Other elements
```

#### **margin** - Space OUTSIDE the element
- Pushes other elements away
- `margin: 1rem;` = 1rem space on all sides
- `margin: 1rem 0;` = 1rem top/bottom, 0 left/right

#### **padding** - Space INSIDE the element
- Pushes content away from edges
- `padding: 2rem;` = 2rem space inside all sides
- `padding: 0.5rem 1rem;` = 0.5rem top/bottom, 1rem left/right

#### **background** or **background-color** - Color behind content
- Fills the area behind text/content
- `background: white;` = white background
- `background-color: green;` = green background

---

### TODO 1: Style the Container
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

**Result:** A white card that's 250px wide with nice spacing inside.

---

### TODO 2: Style the Count Display
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

### TODO 3: Style the Buttons
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

### BONUS TODO 4: Green Increment Button
```css
#increment {
  background-color: green;
}
```

- `#increment` → Targets only the + button
- `background-color: green;` → Green background

---

### BONUS TODO 5: Hover Effect
```css
button:hover {
  background: #e2e8f0;
}
```

- `button:hover` → Applies when mouse is over button
- `background: #e2e8f0;` → Light gray color

---

## JavaScript

### What is JavaScript?
JavaScript makes your page **interactive**: responds to clicks and updates content.

---

### TODO 1: Get Elements
```javascript
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
```

- `document.getElementById("count")` → Finds `<p id="count">` in HTML
- `const` = constant variable (cannot be reassigned)
- Store each element so we can control it later

**Why:** JavaScript needs to "grab" HTML elements to work with them.

---

### TODO 2: Create Count Variable
```javascript
let count = 0;
```

- `let` = variable that CAN change
- `count = 0` → Start at zero

**Why:** This tracks the current number.

---


### TODO 3: Increment Button
```javascript
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});
```

- `addEventListener("click", ...)` → Wait for button click
- `count++` → Increase by 1 (shorthand for `count = count + 1`)
- `updateDisplay()` → Show new number

---

### TODO 5: Decrement Button
```javascript
decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});
```

- `count--` → Decrease by 1 (shorthand for `count = count - 1`)

---

### TODO 6: Reset Button
```javascript
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
```

- `count = 0` → Reset the counter to 0


---

### ✅ Complete JavaScript:
```javascript
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
```

---


## Testing Checklist

Open `index.html` in browser:

- [ ] See "Counter App" heading
- [ ] See "0" in large text
- [ ] See three buttons (-, Reset, +)
- [ ] White box around content
- [ ] Click **+** → number increases
- [ ] Click **-** → number decreases
- [ ] Click **Reset** → back to 0
- [ ] (Bonus) + button is green
- [ ] (Bonus) Buttons change color on hover

---