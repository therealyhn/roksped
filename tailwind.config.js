tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'sans-serif'],
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
            },
            colors: {
                primeGreen: '#6BAE45',
                primeYellow: '#FFC107',
                darkGray: '#343A40',
                lightGray: '#f5f5f5',
                medGray: '#9E9E9E'
            },
            gridTemplateColumns: {
                'proj': '500px minmax(900px, 1fr) 100px'
            }
        }
    }
}

