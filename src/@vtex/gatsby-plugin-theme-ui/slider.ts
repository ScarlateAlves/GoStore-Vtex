import type { SxStyleProp } from '@vtex/store-ui'
import { createTheme, responsivePictureTheme } from '@vtex/store-ui'

const paginationDots: SxStyleProp = {
  container: {
    paddingY: '10px',
    paddingX: 0,
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    bg: '#a8a8a8',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '12px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    height: `0.725rem`,
    width: `0.725rem`,
  },
  activeDot: {
    bg: 'secondary',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '12px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    height: `0.725rem`,
    width: `0.725rem`,
  },
}

const shelfPaginationDots: SxStyleProp = createTheme(paginationDots, {
  container: {
    position: 'relative',
  },
})

const shelfArrows: SxStyleProp = {
  left: {
    button: {
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },

  right: {
    button: {
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },
}

const carouselArrows: SxStyleProp = {
  left: {
    button: {
      position: 'absolute',
      top: '50%',
      left: 0,
      zIndex: 1,
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },

  right: {
    button: {
      position: 'absolute',
      top: '50%',
      right: 0,
      zIndex: 1,
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'text',
    },
  },
}

const carouselResponsivePicture = createTheme(responsivePictureTheme, {
  picture: {
    height: ['540px', '614px'],
  },
  img: {
    aspectRatio: ['900 / 1348', '1680 / 806'],
    height: ['540px', '614px'],
    zIndex: -2,
  },
})

const theme: SxStyleProp = {
  productImageGallery: {
    mx: 2,
    display: 'flex',
    flexWrap: 'nowrap',

    miniature: {
      container: {
        mx: '0.9rem',
        width: '78px',
        flexDirection: 'row',
      },

      active: {
        marginBottom: '5px',
        borderStyle: 'solid',
        borderColor: 'secondary',
        borderWidth: '1px',
      },

      inactive: {
        marginBottom: '5px',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: '1px',
      },
    },

    featured: {
      flexGrow: 1,
      position: 'relative',

      media: { width: '100%' },

      arrow: carouselArrows,

      paginationDots: shelfPaginationDots,
    },
  },

  carousel: {
    position: 'relative',
    arrow: carouselArrows,
    paginationDots,
    responsivePicture: carouselResponsivePicture,
  },

  shelf: {
    default: {
      container: {
        alignContent: 'stretch',
        alignItems: 'stretch',
      },

      title: {
        fontSize: '24px',
        color: '#3F3F40',
        fontWeight: 400,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      },

      // paginationDots: shelfPaginationDots,
    },
  },
}

export default theme
