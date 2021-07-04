import { createSelector} from "reselect";

export const directorySelector = state=>state.directory;

export const dSelector = createSelector(
    [directorySelector],
    directory=>directory.sections
);