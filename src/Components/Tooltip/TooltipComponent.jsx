import styled from "@emotion/styled";
import { Tooltip as MuiTooltip, Zoom, tooltipClasses } from "@mui/material";
import { colors, speed } from "../../theme";

export const TooltipComponent = styled(({ className, ...props }) => (
    <MuiTooltip
        {...props}
        TransitionComponent={Zoom}
        classes={{ popper: className }}
        enterDelay={speed.fast}
    />
))(({ theme, color, textColor, tooltipMargin }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: color,
        color: textColor || colors.text__color,
        fontSize: theme.typography.pxToRem(12),
        borderRadius: '2em',
        zIndex: 10,
        margin: tooltipMargin && tooltipMargin
    },
}));