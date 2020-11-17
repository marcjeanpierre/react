import { createStyles, Theme } from "@material-ui/core";

export type Styles = "headerBar"; // add class create

export default (theme: Theme) => createStyles<Styles, {}>({
    headerBar:{
        alignItems: 'center',
    }
});