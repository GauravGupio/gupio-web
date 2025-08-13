# Gupio Design System - Tailwind CSS Configuration

This document outlines the complete design system extracted from the Gupio website, configured for use with Tailwind CSS and shadcn/ui.

## 🎨 Color Palette

### Primary Brand Colors
The core brand colors used throughout the Gupio website:

```css
/* Primary Colors */
bg-gupio-dark-blue    /* #00021a - Main dark background */
bg-gupio-blue         /* #011c33 - Secondary blue */
bg-gupio-yellow       /* #ffbf00 - Primary accent color */
text-gupio-white      /* #fff - Pure white */
text-gupio-gray       /* #d3d3d3 - Light gray */
```

### Blue Color Variants
Extended blue palette for different use cases:

```css
/* Blue Variants */
bg-blue-dark          /* #010f27 - Darker blue variant */
text-blue-navy        /* #012970 - Navy blue for headings */
border-blue-light     /* #0d376f - Light blue for borders */
shadow-blue-accent    /* #1f2348 - Accent blue for shadows */
```

### Yellow Color Variants
Yellow accent colors with different opacities:

```css
/* Yellow Variants */
bg-yellow-primary     /* #ffbf00 - Main yellow */
bg-yellow-light       /* #fde404fb - Light yellow for gradients */
bg-yellow-accent      /* #facc15 - Alternative yellow */
border-yellow-transparent /* #ffbf0050 - Transparent yellow */
bg-yellow-overlay     /* #ffbf0061 - Overlay yellow */
```

### Gray Scale
Comprehensive gray palette:

```css
/* Gray Scale */
text-gray-light       /* #d3d3d3 - Light gray */
text-gray-medium      /* #5f6980 - Medium gray */
text-gray-dark        /* #444444 - Dark gray */
text-gray-text        /* #213547 - Text gray */
```

### White Variants with Transparency
White colors with different transparency levels:

```css
/* White Variants */
text-white-pure       /* #fff */
text-white-transparent-50  /* #ffffff50 */
text-white-transparent-70  /* #ffffff70 */
text-white-transparent-90  /* #ffffffb2 */
```

### Dashboard Colors
Colors specifically for dashboard/admin interfaces:

```css
/* Dashboard Colors */
bg-dashboard-primary      /* #4154f1 - Primary blue */
bg-dashboard-secondary    /* #717ff5 - Secondary blue */
bg-dashboard-background   /* #f6f9ff - Light background */
text-dashboard-text       /* #444444 - Text color */
border-dashboard-border   /* #eaedf1 - Border color */
border-dashboard-card     /* #ebeef4 - Card border */
bg-dashboard-success      /* #cfe2ff - Success light */
bg-dashboard-warning      /* #e2e3e5 - Warning light */
```

## 🔤 Typography

### Font Families
All the fonts used in the Gupio website:

```css
/* Font Families */
font-inter        /* Inter - Main body font */
font-poppins      /* Poppins - Headings and buttons */
font-sarabun      /* Sarabun - Navigation and UI text */
font-manrope      /* Manrope - Alternative body font */
font-oxanium      /* Oxanium - Phone numbers and accents */
font-nunito       /* Nunito - Dashboard headings */
font-open-sans    /* Open Sans - Dashboard body text */
```

### Typography Scale
Predefined text sizes with proper line heights and weights:

```css
/* Typography Scale */
text-heading-xl   /* 44px/58px, 700 weight */
text-heading-lg   /* 34px/44px, 500 weight */
text-heading-md   /* 28px/40px, 700 weight */
text-heading-sm   /* 22px/30px, 700 weight */
text-body-lg      /* 18px/26px, 400 weight */
text-body-md      /* 16px/26px, 400 weight */
text-body-sm      /* 14px/22px, 400 weight */
```

## 🎭 Background Gradients

### Predefined Gradients
Common gradient patterns used throughout the site:

```css
/* Background Gradients */
bg-yellow-gradient    /* Yellow button hover effect */
bg-shimmer-gradient   /* Text shimmer animation */
bg-overlay-gradient   /* Dark overlay for images */
```

## 🌟 Box Shadows

### Shadow System
Comprehensive shadow system for depth and elevation:

```css
/* Box Shadows */
shadow-yellow-glow    /* Yellow glow effect */
shadow-yellow-hover   /* Yellow hover shadow */
shadow-navbar         /* Navigation bar shadow */
shadow-card           /* Card shadow */
shadow-dropdown       /* Dropdown shadow */
shadow-button         /* Button shadow */
shadow-slide          /* Slide/carousel shadow */
```

## 🎯 Border Radius

### Border Radius System
Consistent border radius values:

```css
/* Border Radius */
rounded-button        /* 10px - Buttons and cards */
rounded-card          /* 20px - Large cards */
rounded-icon          /* 50% - Circular elements */
```

## 📏 Spacing

### Custom Spacing
Additional spacing utilities:

```css
/* Custom Spacing */
p-70                 /* 70px padding */
m-70                 /* 70px margin */
py-section           /* 70px vertical padding */
my-section           /* 70px vertical margin */
```

## 🎬 Animations

### Animation Classes
Predefined animations for interactive elements:

```css
/* Animations */
animate-shimmer       /* Text shimmer effect */
animate-bounce        /* Bounce animation */
animate-scroll-marquee /* Horizontal scroll */
animate-dropdown      /* Dropdown animation */
```

## 🎨 Custom Utilities

### Text Stroke
Custom text stroke utilities for special effects:

```css
/* Text Stroke */
text-stroke-yellow    /* Yellow text stroke */
text-stroke-white     /* White text stroke */
```

## 📱 Usage Examples

### Button Components
```jsx
// Primary yellow button
<button className="bg-gupio-yellow text-gupio-dark-blue font-poppins font-bold px-6 py-4 rounded-button uppercase hover:shadow-yellow-hover transition-all duration-300">
  Get Started
</button>

// Secondary blue button
<button className="bg-gupio-blue text-gupio-white font-poppins px-6 py-3 rounded-button uppercase">
  Learn More
</button>
```

### Card Components
```jsx
// Service card
<div className="bg-gupio-blue p-8 rounded-card shadow-card">
  <h3 className="text-heading-md text-gupio-yellow mb-4">Smart Parking</h3>
  <p className="text-body-md text-gupio-gray">Advanced parking solutions</p>
</div>
```

### Navigation
```jsx
// Navigation bar
<nav className="bg-gupio-dark-blue/80 backdrop-blur-sm shadow-navbar">
  <div className="container mx-auto px-4 py-5">
    <div className="flex items-center justify-between">
      <img src="/logo.png" alt="Gupio" className="max-w-[150px]" />
      <div className="flex items-center gap-8">
        <a href="#" className="text-gupio-white font-sarabun text-sm uppercase hover:text-gupio-yellow transition-colors">
          Home
        </a>
        <a href="#" className="text-gupio-white font-sarabun text-sm uppercase hover:text-gupio-yellow transition-colors">
          Services
        </a>
      </div>
    </div>
  </div>
</nav>
```

### Hero Section
```jsx
// Hero section
<section className="bg-gupio-dark-blue py-section">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h1 className="text-heading-xl text-gupio-white mb-6">
        Smart Parking Solutions
      </h1>
      <p className="text-body-lg text-gupio-gray mb-8 max-w-2xl mx-auto">
        Revolutionizing parking management with cutting-edge technology
      </p>
      <button className="bg-gupio-yellow text-gupio-dark-blue font-poppins font-bold px-8 py-4 rounded-button uppercase">
        Get Started
      </button>
    </div>
  </div>
</section>
```

### Dashboard Components
```jsx
// Dashboard card
<div className="bg-white rounded-lg shadow-card p-6">
  <h3 className="text-blue-navy font-nunito font-semibold mb-4">Statistics</h3>
  <div className="text-dashboard-text">
    <p className="text-body-md">Total Users: 1,234</p>
  </div>
</div>
```

## 🎨 Color Usage Guidelines

### Primary Usage
- **Dark Blue (#00021a)**: Main background, navigation
- **Blue (#011c33)**: Secondary backgrounds, cards
- **Yellow (#ffbf00)**: Primary CTAs, highlights, accents
- **White (#fff)**: Primary text on dark backgrounds
- **Gray (#d3d3d3)**: Secondary text, descriptions

### Accessibility
- Ensure sufficient contrast ratios (4.5:1 minimum for normal text)
- Use yellow sparingly for important actions only
- Provide alternative text for color-coded information

### Responsive Design
- Colors work across all screen sizes
- Maintain consistency in color usage across breakpoints
- Use transparency variants for overlay effects

## 🔧 Integration with shadcn/ui

### Theme Configuration
Add these colors to your shadcn/ui theme configuration:

```typescript
// globals.css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    /* Gupio Colors */
    --gupio-dark-blue: 220 100% 5%;
    --gupio-blue: 210 100% 10%;
    --gupio-yellow: 45 100% 50%;
    --gupio-gray: 0 0% 83%;
    
    /* ... other shadcn variables */
  }
  
  .dark {
    --background: 220 100% 5%; /* gupio-dark-blue */
    --foreground: 0 0% 100%;
    
    /* ... dark mode variables */
  }
}
```

### Component Examples
```jsx
// shadcn/ui Button with Gupio colors
<Button className="bg-gupio-yellow text-gupio-dark-blue hover:bg-yellow-accent">
  Get Started
</Button>

// shadcn/ui Card with Gupio styling
<Card className="bg-gupio-blue border-blue-light">
  <CardHeader>
    <CardTitle className="text-gupio-yellow">Service Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-gupio-gray">Service description</p>
  </CardContent>
</Card>
```

## 📋 Implementation Checklist

- [ ] Install Tailwind CSS
- [ ] Copy the `tailwind.config.js` file
- [ ] Add Google Fonts imports to your CSS
- [ ] Configure shadcn/ui theme with Gupio colors
- [ ] Test color contrast ratios
- [ ] Implement responsive design patterns
- [ ] Create component library with consistent styling
- [ ] Document component usage patterns

## 🎯 Best Practices

1. **Consistency**: Always use the predefined color classes
2. **Semantic Naming**: Use color names that reflect their purpose
3. **Accessibility**: Ensure proper contrast ratios
4. **Performance**: Use CSS custom properties for dynamic theming
5. **Maintainability**: Keep color definitions centralized
6. **Documentation**: Document any new color additions

This design system provides a complete foundation for building consistent, accessible, and visually appealing interfaces that match the Gupio brand identity.