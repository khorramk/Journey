module.exports = {
  theme: {
    backgroundColor: theme => ({
        'wood': '#6F6868',
        'pale-green': '#92DFAF',
        'leaf-green': '#D1E9C3',
        'pure-white': '#FFFFFF',
        'pale-water': '#BBC8CA'
    }),

    width: {
        'bar-size': 'calc(100vw - 20vw)',
        'login-btn-width': '100px',
        'nav-bar-size': '100vw',
        'menu-item-size': '25vw',


    },
    spacing: {
        'middle-top-space': '50vh',
        "left-right-space": 'calc(100vw - 90vw)',
        'login-inputs-size':'80px',
        'bottom-spacing': '30px',
        'login-spacing': '10px',
        'link-spacing': '10px',
        'quarter-space-top': '25vh',
        'mr-40' : 'calc(100vw - 80px)',


    },
    boxShadow: {
        'inside-shadow': 'inset 0px 4px 4px rgba(0,0,0,0.25)'
    },
    height: {
        'menu-item-height': '10vh',
        'full-viewport': '100vh'
    },

  },
  variants: {},
  plugins: []
}
