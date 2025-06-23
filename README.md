# Stacks Framework Documentation

Stacks is a lightweight JavaScript framework that provides intuitive layout components using custom HTML elements. It simplifies flexbox layouts with semantic `<vStack>` and `<hStack>` elements, requiring only a single JavaScript file.

## Getting Started

### Installation

#### Option 1: CDN (Recommended)

Include the framework directly from CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/ohjey/stacks@main/stacks.js" defer></script>
```

#### Option 2: Local Files

Download and include the JavaScript file in your HTML:

```html
<script src="stacks.js"></script>
```

### Basic Usage

```html
<body>
  <vStack>
    <h1>Vertical Layout</h1>
    <p>Items stack vertically</p>
  </vStack>
  
  <hStack>
    <button>Button 1</button>
    <button>Button 2</button>
  </hStack>
</body>
```

## Components

### vStack (Vertical Stack)

Creates a vertical flexbox container where items are arranged in a column.

**Default Behavior:**
- `display: flex`
- `flex-direction: column`
- `align-items: flex-start`
- `justify-content: flex-start`
- `flex-wrap: nowrap`
- `gap: calc(1rem + 0.5vw)`
- `width: auto`

### hStack (Horizontal Stack)

Creates a horizontal flexbox container where items are arranged in a row.

**Default Behavior:**
- `display: flex`
- `flex-direction: row`
- `align-items: stretch`
- `justify-content: flex-start`
- `flex-wrap: nowrap`
- `gap: calc(1rem + 0.5vw)`
- `width: auto`

## Attributes

### gap

Controls spacing between child elements with responsive values.

**Values:**
- `small` - `calc(0.5rem + 0.5vw)`
- `medium` - `calc(1rem + 0.5vw)` (default)
- `large` - `calc(2rem + 0.5vw)`

```html
<vStack gap="small">
  <div>Item 1</div>
  <div>Item 2</div>
</vStack>
```

### align

Controls alignment of items along the cross-axis.

**Values:**
- `start` - `flex-start`
- `center` - `center`
- `end` - `flex-end`
- `stretch` - `stretch`
- `baseline` - `baseline`

**Default:**
- vStack: `start`
- hStack: `stretch`

```html
<vStack align="center">
  <div>Centered content</div>
</vStack>

<hStack align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</hStack>
```

### justify

Controls alignment of items along the main axis.

**Values:**
- `start` - `flex-start` (default)
- `center` - `center`
- `end` - `flex-end`
- `between` - `space-between`
- `around` - `space-around`
- `evenly` - `space-evenly`

```html
<hStack justify="between">
  <div>Left</div>
  <div>Right</div>
</hStack>

<vStack justify="center">
  <div>Vertically centered</div>
</vStack>
```

### wrap

Controls whether items wrap to new lines.

**Values:**
- `false` - `nowrap` (default)
- `true` - `wrap`
- `wrap-reverse` - `wrap-reverse`

```html
<hStack wrap="true">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</hStack>
```

### padding

Adds internal padding to the stack container.

**Values:**
- `small` - `0.5rem`
- `medium` - `1rem`
- `large` - `2rem`

**Default:** No padding (`0rem`)

```html
<vStack padding="medium">
  <div>Content with padding</div>
</vStack>
```

### width

Controls the width of the stack container.

**Values:**
- `full` - `100%`
- `half` - `50%`
- `third` - `33.33%`
- `quarter` - `25%`
- `fifth` - `20%`

**Default:** `auto`

```html
<hStack>
  <vStack width="half">Left column</vStack>
  <vStack width="half">Right column</vStack>
</hStack>

<hStack>
  <div width="third">1/3 width</div>
  <div width="third">1/3 width</div>
  <div width="third">1/3 width</div>
</hStack>
```

## Container System

### contain Attribute on Body

Apply the `contain` attribute to the `<body>` element to create a centered, max-width container layout.

```html
<body contain="800px">
  <vStack>
    <h1>Contained Content</h1>
    <p>All content will be centered and limited to 800px width</p>
  </vStack>
</body>
```

**Behavior:**
- Sets `max-width` on all elements (except body)
- Centers content horizontally
- Sets body to full viewport height
- Creates a column layout for the entire page

## Examples

### Basic Card Layout

```html
<vStack gap="large" padding="medium" align="center">
  <h2>Card Title</h2>
  <p>Card description goes here</p>
  <hStack gap="small">
    <button>Cancel</button>
    <button>Confirm</button>
  </hStack>
</vStack>
```

### Navigation Bar

```html
<hStack justify="between" align="center" padding="medium">
  <div class="logo">Logo</div>
  <hStack gap="medium">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </hStack>
</hStack>
```

### Centered Page Layout

```html
<body contain="1200px">
  <vStack gap="large" padding="medium">
    <header>
      <h1>Page Title</h1>
    </header>
    
    <main>
      <vStack gap="medium">
        <section>Content section 1</section>
        <section>Content section 2</section>
      </vStack>
    </main>
    
    <footer>
      <p>Footer content</p>
    </footer>
  </vStack>
</body>
```

### Two-Column Layout

```html
<hStack gap="large">
  <vStack width="half" padding="medium">
    <h2>Left Column</h2>
    <p>Content for the left side</p>
  </vStack>
  <vStack width="half" padding="medium">
    <h2>Right Column</h2>
    <p>Content for the right side</p>
  </vStack>
</hStack>
```

### Three-Column Grid

```html
<hStack gap="medium">
  <vStack width="third" padding="small">
    <h3>Column 1</h3>
    <p>First column content</p>
  </vStack>
  <vStack width="third" padding="small">
    <h3>Column 2</h3>
    <p>Second column content</p>
  </vStack>
  <vStack width="third" padding="small">
    <h3>Column 3</h3>
    <p>Third column content</p>
  </vStack>
</hStack>
```

## Error Handling

The framework includes built-in error handling:

- Invalid attribute values are logged to the console
- Elements with invalid `gap` values get a red outline for debugging
- Default values are applied when attributes are missing

## Browser Support

Stacks works in all modern browsers that support:
- CSS Flexbox
- CSS Custom Properties (for responsive gap values)
- JavaScript DOM manipulation

## Tips and Best Practices

1. **Responsive Design**: The gap values automatically scale with viewport width using `calc()` functions
2. **Nesting**: Stacks can be nested infinitely for complex layouts
3. **Semantic HTML**: Use appropriate HTML elements inside stacks for accessibility
4. **Custom Styling**: Add your own CSS classes for colors, typography, and other styling
5. **Container Width**: Use the `contain` attribute for consistent page layouts

## File Structure

```
stacks/
└── stacks.js     # Complete framework functionality
```

The framework is intentionally lightweight with everything contained in a single JavaScript file, focusing solely on layout without imposing design opinions.
