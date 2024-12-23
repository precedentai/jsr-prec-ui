# ResizableHandle

A customizable drag handle component for resizable interfaces.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderWidth` | string | `'5px'` | Width of the handle |
| `height` | string | `'100%'` | Height of the handle |
| `hoverColor` | string | `'#3F77AF'` | Color of the handle on hover |
| `marginTop` | string | `'0px'` | Top margin of the handle |

## Usage

```jsx
import { ResizableHandle } from '@prec-ui/components';

const YourComponent = () => (
  <ResizableCustomHandle 
    hoverColor="#3F77AF"
    height="100%"
    // ... other props
  />
);
```