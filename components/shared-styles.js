export const sharedStyles = {
    // Colors
    colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: {
            rose: '#f43f5e',
            blue: '#3b82f6',
            purple: '#a855f7',
        },
        background: '#f0f0f0',
    },
    
    // Typography
    typography: {
        heading: {
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: '700',
        },
        body: {
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: '400',
        },
    },
    
    // Animations
    animations: {
        cardHover: {
            scale: 1.02,
            transition: { duration: 0.2 },
        },
        fadeIn: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
        },
    },
    
    // Common Components
    card: {
        base: {
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '3px solid black',
            boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.9)',
            transition: 'all 0.2s ease-in-out',
        },
        hover: {
            transform: 'translateY(-4px)',
            boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.9)',
        },
    },
    
    button: {
        base: {
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            transition: 'all 0.2s ease-in-out',
            border: '2px solid black',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.9)',
        },
        hover: {
            transform: 'translateY(-2px)',
            boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.9)',
        },
    },
}; 