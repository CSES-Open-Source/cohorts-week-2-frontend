# Counter App

First, clone the project from Github:

```
git clone git@github.com:CSES-Open-Source/cohorts-week-2-frontend.git
```

---

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

┌─────────── MARGIN (space outside) ────────────┐
│                                               │
│  ┌─────── PADDING (space inside) ─────────-┐  │
│  │                                         │  │
│  │  ┌────────────────────────┐             │  │
│  │  │                        │             │  │
│  │  │      CONTENT           │             │  │
│  │  │      (text/images)     │             │  │
│  │  │                        │             │  │
│  │  └────────────────────────┘             │  │
│  │                                         │  │
│  └─────────────────────────────────────────┘  │
│                                               │
└───────────────────────────────────────────────┘

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

### Get Elements

```javascript
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
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

### TODO 10: Add Script Tag

```html
<script src="script.js"></script>
```

**Where:** At the very end of `<body>`, before `</body>`

This loads your JavaScript file to make buttons work.

---

### TODO 11: Increment Button

```javascript
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});
```

- `addEventListener("click", ...)` → Wait for button click
- `count++` → Increase by 1 (shorthand for `count = count + 1`)

---

### TODO 12: Decrement Button

```javascript
decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});
```

- `count--` → Decrease by 1 (shorthand for `count = count - 1`)
