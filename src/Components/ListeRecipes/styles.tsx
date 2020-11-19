import { Theme, createStyles } from "@material-ui/core";

export type Styles = 'root' | 'pageContainer';
const styles = (theme: Theme) => createStyles<Styles, {}>({
  root: {
    height: "inherit",
    flex: "1 1 auto",
    "& > div": {},
    "& > div:first-child": { flex: "0 0 auto" },
    "& > div:last-child": { flex: "1 1 auto" },
  },
  // Object Main Page
  pageContainer: {
    margin: 0,
    padding: 0,
    width: '100%',
    background: '#f5f5f5',
    // Element containing both assets
    // Element containing the elements of the hand (the title, the choices and the footer)
    '& .RecipeContainer': {
      zIndex: 9,
      padding: 0,
      height: "100%",
      width: "100vw",
      maxWidth: "100%",
      // Element containing the title
      '& .title': {
        height: '25%',
        display: 'grid', 
        padding: '10% 0 0',
        alignSelf: 'flex-end',
        '& > h4': {
          fontSize: 'larger',
        }
      },
      // Element containing the choices
      '& .elemRecipe': {
        height: '35%',
        marginBottom: '2%',
        '& .recipe': {
          margin: '10px -5%',
          [theme.breakpoints.up('lg')]: {
            margin: '10px -7%',
          },
          [theme.breakpoints.up('xl')]: {
            margin: '10px -8%',
          },
          '& .disabled': {
            color: '#dbdbdb',        
          },
          '& > .itemRecipe': {
            zIndex: 9,
            // width: '212px',
            display: 'grid',
            // height: '257px',
            boxShadow: '0px 1px 15px 1px #b3b3b3',
            '& .avatar': {
              color: '#0046fe', 
              fontWeight: 'bold',
              fontSize: 'xx-large',  
              '& path': {
                fill: "#0046fe",
              }        
            },
            '& .titleAndSubTitle': {
              fontSize: 'unset',
              fontWeight: 'bold',        
            },
            '& .elementButton': {
              display: 'flex',
              justifyContent: 'center', 
              '& > a ': {
                width: '100%',
                textAlign: 'center',
                '& > button ': {
                  borderRadius: '2px',
                  fontSize: 'initial',
                  padding: '8%', 
                  width: '75%', 
                  '& > span ': {
                    fontWeight: 500,
                  }
                }
              }
            },
          }
        },
      },
    },
  }
})
export default styles;