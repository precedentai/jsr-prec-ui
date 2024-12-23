# ResizableCustomHandle

A customizable drag handle component for resizable interfaces.

## Usage

```tsx
import { ResizableCustomHandle } from '@yourusername/components';

const YourComponent = () => (
  <ResizableCustomHandle 
    hoverColor="#3F77AF"
    topMargin="10px"
  />
);
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'0px'` | Width of the handle |
| `height` | `string` | `'100%'` | Height of the handle |
| `hoverColor` | `string` | `'#3F77AF'` | Color of the handle on hover |
| `topMargin` | `string` | `'0px'` | Top margin of the handle |
| `bottomMargin` | `string` | `'0px'` | Bottom margin of the handle |

## Examples

### Basic Usage
```tsx
const BasicExample = () => (
  <ResizableCustomHandle />
);
```

### Custom Styling
```tsx
const CustomExample = () => (
  <ResizableCustomHandle 
    hoverColor="#FF5733"
    topMargin="20px"
    bottomMargin="20px"
    height="80%"
  />
);
```